const url = require('url')
const path = require('path');
const { create } = require('domain');
const {app, BrowserWindow, Menu} = require('electron')

process.env.NODE_ENV = 'development' // Set environment status.

const port = 8888
const pythonModule = 'server'
let server = null
let mainWindowOfApp

const getScriptPath = () => { // Construct path to tornado server.
    return path.join(__dirname, pythonModule + '.py')
}

function createServer() { // Run server.
    const script = getScriptPath()
    const cp = require("child_process") // Create namespace for .spawn method.
    server = cp.spawn('python', [script, port]) // Run python.exe and pass arguments to it.
}

const mainMenuTemplate = [ // Create appropriate one-item menu template.
    {
        label: 'Menu',
        submenu: [
            {
                label:'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    }
]

app.on('ready', () => {
    mainWindowOfApp = new BrowserWindow({ // Create Electron window.
        useContentSize : true,
        minWidth: 600
    })
    mainWindowOfApp.loadURL(url.format({ // Load mainWindowOfApp.html.
        pathname: path.join(__dirname, 'mainWindowOfApp.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)

    createServer()
})

app.on('will-quit', () => { // Handle quit event shutting down server too.
    server.kill() 
})