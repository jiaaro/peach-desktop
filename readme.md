# Peach Desktop

An unnofficial desktop client for Peach ([peach.cool](http://peach.cool/)) - built using unannounced API endpoints intercepted from the official iOS app.

Built with Node + Electron + Zepto + Nunjucks, and a bunch of hacky JS/CSS. Feel free to completely rearchitect or clean up as you see fit. 

### Developing:

```
npm install
npm run compile
npm start
```

If `npm start` fails, first make sure you have electron-prebuilt installed via NPM. Then cd to the working directory and give `electron app.js` a shot.

### Building

Make sure you run `npm run compile` prior to packaging, to pre-compile Nunjucks templates. Then run the build command for your platform. For example, to build for OS X:

```
npm run build-osx
```

This will package up a standalone binary in the /bin directory which can be run on x64 OS X. Tested on El Capitan 10.11.1 Beta.

Other platforms are supported via `npm run build-linux`, `npm run build-win32` for Windows 32-bit and `npm run build-win64` for Windows 64-bit. We typically build for 32-bit Windows as there's no real need for 64-bit support and it seems more stable.

### TBD (not yet implemented):

- Ability to post new messages
- Activity feed
- Waving
- Favorites
- Changing server-side user settings
- Various other features

### The MIT License (MIT)

Copyright (c) 2015 Jackson Palmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

