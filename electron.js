const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

// メインウィンドウを宣言 <-- (1)
let mainWindow

// ウィンドウの生成 <--- (2)
const createWindow = () => {
    let mainWindow = new BrowserWindow({
        contentSecurityPolicy: "default-src 'none'",
        width: 400,
        height: 600
    })
    // developならローカルホストでホスティングされているurlを
    // developでなければビルド済みの成果物を読み込む <--- (3)
    let startUrl;
    if (process.env.NODE_ENV === 'develop') {
        startUrl = 'http://localhost:1234';
    } else {
        startUrl = url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    }
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
