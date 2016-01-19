'use strict';

var electron = require('electron');
var path = require('path');
var express = require('express');
var request = require('request');
var Menu = require("menu");

// Initialize Express
var server = express();

// Serve static assets
server.use(express.static(path.join(__dirname, 'public')));

// Proxy the entire Peach API on /api/*
server.use('/api', function (req, res) {
  var url = 'https://v1.peachapi.com/' + req.url;
  req.pipe(request(url)).pipe(res);
});

// Catch random DNS errors
process.on('uncaughtException', function (err) {
  console.error('uncaughtException: ' + err.message);
  console.error(err.stack);
});

/// Fire up server
server.listen(1134, function () {
  console.log('Peach server started on port 1134!');
})

// Electron setup
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Peach Desktop',
    icon: path.join(__dirname, 'icon.png'),
    width: 400,
    minWidth: 400,
    maxWidth: 400,
    height: 600,
    minHeight: 600,
    resizable: true,
    titleBarStyle: 'default',
    show: true,
    autoHideMenuBar: true,
    webPreferences: {
      blinkFeatures: 'OverlayScrollbars',
      overlayScrollbars: true
    }
  });
  mainWindow.loadURL('http://localhost:1134/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {

  // Create the browser window
  createWindow();

  // Create the application's main menu
  var template = [{
    label: "Application",
    submenu: [{
      label: "Quit",
      accelerator: "Command+Q",
      click: function () {
        app.quit();
      }
    }]
  }, {
    label: "Edit",
    submenu: [{
      label: "Undo",
      accelerator: "CmdOrCtrl+Z",
      selector: "undo:"
    }, {
      label: "Redo",
      accelerator: "Shift+CmdOrCtrl+Z",
      selector: "redo:"
    }, {
      type: "separator"
    }, {
      label: "Cut",
      accelerator: "CmdOrCtrl+X",
      selector: "cut:"
    }, {
      label: "Copy",
      accelerator: "CmdOrCtrl+C",
      selector: "copy:"
    }, {
      label: "Paste",
      accelerator: "CmdOrCtrl+V",
      selector: "paste:"
    }, {
      label: "Select All",
      accelerator: "CmdOrCtrl+A",
      selector: "selectAll:"
    }],
    label: "View",
    submenu: [{
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click: function () {
        BrowserWindow.getFocusedWindow().reloadIgnoringCache();
      }
    }, {
      label: 'Toggle DevTools',
      accelerator: 'Alt+CmdOrCtrl+I',
      click: function () {
        BrowserWindow.getFocusedWindow().toggleDevTools();
      }
    }]
  }];

  // Set the application menu
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // Push any extra windows to the browser
  mainWindow.webContents.on('new-window', function (e, url) {
    e.preventDefault();
    require('shell').openExternal(url);
  });

});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
