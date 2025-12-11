const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let mainWindow = null;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#20232a',
    title: 'WinWin 编辑器',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'editor.html'));
  // mainWindow.webContents.openDevTools(); // 调试时可打开
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * 选择任意输出目录（导出 Markdown / HTML 用）
 */
ipcMain.handle('choose-output-dir', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: '选择文件输出目录',
    properties: ['openDirectory', 'createDirectory']
  });
  if (canceled || !filePaths || !filePaths.length) return null;
  return filePaths[0];
});

/**
 * 选择 Hexo 文章目录（通常是 blog/source/_posts）
 */
ipcMain.handle('choose-hexo-dir', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: '选择 Hexo 文章目录（通常是 blog/source/_posts）',
    properties: ['openDirectory', 'createDirectory']
  });
  if (canceled || !filePaths || !filePaths.length) return null;
  return filePaths[0];
});

/**
 * 在系统里打开 Hexo 目录
 */
ipcMain.handle('open-hexo-dir', async (event, dir) => {
  if (!dir) return;
  await shell.openPath(dir); // 打开资源管理器
  return dir;
});

/**
 * 保存文件到指定目录
 * payload: { dir, filename, content }
 */
ipcMain.handle('save-file', async (event, payload) => {
  const { dir, filename, content } = payload || {};
  if (!dir || !filename) {
    throw new Error('dir 和 filename 不能为空');
  }
  const target = path.join(dir, filename);
  await fs.promises.writeFile(target, content, 'utf8');
  return target;
});

/**
 * 运行 hexo 命令
 * payload: { hexoPostsDir, cmd }  // cmd: 'g' | 's' | 'clean'
 *
 * 假设 hexoPostsDir 为 blog/source/_posts
 * 则 Hexo 根目录为 blog
 */
ipcMain.handle('run-hexo-command', async (event, payload) => {
  const { hexoPostsDir, cmd } = payload || {};
  if (!hexoPostsDir || !cmd) {
    throw new Error('hexoPostsDir 和 cmd 必须提供');
  }

  const hexoRoot = path.resolve(hexoPostsDir, '..', '..');

  // hexo s：后台长时间运行
  if (cmd === 's') {
    const child = spawn('npx', ['hexo', 's'], {
      cwd: hexoRoot,
      shell: true,
      detached: true,
      stdio: 'ignore'
    });
    child.unref();
    return {
      code: 0,
      message: '已在后台启动 hexo s，请访问 http://localhost:4000 预览站点。'
    };
  }

  // 其它命令（如 hexo g / hexo clean）：等待执行结束
  const cmdName = cmd === 'clean' ? 'clean' : cmd; // 兼容 clean

  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['hexo', cmdName], {
      cwd: hexoRoot,
      shell: true
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      resolve({
        code,
        stdout,
        stderr,
        message: `hexo ${cmdName} 退出，code=${code}`
      });
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
});
