'use strict';

var electron = require('electron');
var path = require('path');
var express = require('express');
var request = require('request');

// Initialize Express
var server = express();

// Serve static assets
server.use(express.static(path.join(__dirname, 'public')));

// Proxy the entire Peach API on /api/*
server.use('/api', function(req, res) {
  var url = 'https://v1.peachapi.com/' + req.url;
  req.pipe(request(url)).pipe(res);
});

/// Fire up server
server.listen(1134, function () {
  console.log('Peach server started on port 1134!');
})

// Electron setup
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({title: 'Peach Desktop', icon: path.join(__dirname, 'icon.png'), width: 400, height: 600, resizable: false, titleBarStyle: 'default', show: true});
	mainWindow.loadURL('http://localhost:1134/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);

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