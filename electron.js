const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

let mainWindow

const createWindow = () => {
    let mainWindow = new BrowserWindow({
        contentSecurityPolicy: "default-src 'none'",
        width: 400,
        height: 600
    })
    const startUrl = url.format({
        pathname: path.join(__dirname, './elebuild/index.html'),
        protocol: 'file:',
        slashes: true
    })
    mainWindow.loadURL(startUrl)
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    // mainWindow.toggleDevTools()
}

// electronのアプリに用いる最低限の処理 <--- (4)
app.on('ready', () => createWindow())

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
