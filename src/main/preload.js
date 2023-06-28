const { contextBridge } = require('electron')

const versionObj = {
  chrome: () => process.versions.chrome,
  node: () => process.versions.node
}
contextBridge.exposeInMainWorld('versionObj', versionObj)
