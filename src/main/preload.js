const { contextBridge, ipcRenderer } = require('electron')

const versionObj = {
  chrome: () => process.versions.chrome,
  node: () => process.versions.node
}
contextBridge.exposeInMainWorld('versionObj', versionObj)

const invoke = async (data) => {
  const result = await ipcRenderer.invoke('ipcR invoke', data)
  const sendData = `${result} -caught by preload`
  console.log(sendData)
  return sendData
}

const ipcFunc = {
  send: (data) => ipcRenderer.send('ipcR send', data),
  invoke: invoke
  // invoke: (data) => ipcRenderer.invoke('ipcR invoke', data)
}
contextBridge.exposeInMainWorld('ipcFunc', ipcFunc)
