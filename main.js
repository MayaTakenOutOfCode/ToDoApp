const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const isMac = process.platform === "darwin";


let window;


function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile(path.join(__dirname, "./renderer/index.html"));
}


app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
});

app.on('window-all-closed', ()=>{
    if(!isMac){
        app.quit();
    }
})