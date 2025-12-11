const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  chooseOutputDir: () => ipcRenderer.invoke('choose-output-dir'),
  chooseHexoDir: () => ipcRenderer.invoke('choose-hexo-dir'),
  openHexoDir: (dir) => ipcRenderer.invoke('open-hexo-dir', dir),
  saveFile: (payload) => ipcRenderer.invoke('save-file', payload),
  runHexoCommand: (payload) => ipcRenderer.invoke('run-hexo-command', payload)
});
