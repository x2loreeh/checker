const {BrowserWindow, app, Menu, menu, shell} = require('electron');
const createWindow = () => {
    const window = new BrowserWindow({
        fullscreen: true,
        icon: __dirname + '/icon.png',
    });

    const menu = Menu.buildFromTemplate(menuChecker);
    Menu.setApplicationMenu(menu);

    window.loadFile('index.html');

}

app.whenReady(). then(() => {
    createWindow();
})


const menuChecker = [
    {
        label: "Checker",
        submenu: [
            {
                label: "Changelogs",
                click: () => {
                    shell.openExternal("http://www.google.com")
                    app.popup("hi")
                }
            },
            {
                label: "Quit",
                accelerator: process.platform === 'darwin' ? "Command+Q" : "Ctrl+W",
                click() {
                    app.quit();
                }
            },
            {
                role: "reload"
            }
        ]
    }
]

if (process.env.NODE_ENV !="production") {
    menuChecker.push({
        label: "Dev Tools",
        submenu: [
            {
                label: "Toggle DevTools",
                accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    })
}

