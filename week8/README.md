# Week 8 - Node.js

Since there are no slides for this week, here's some review for the stuff we went through in class.

1. Installation

    If you stil don't have Node.js, go to [nodejs.org](http://nodejs.org) and download the installer. Alternatively if you have homebrew you can install it with `brew install node`.

2. Runing a file with Node.js

    Suppose we have a file called `test.js`. To run it you'd type the following command (assuming that you are already in the same folder):

        node test.js

    If you type `node` without anything after it, you will enter interactive mode (with a `>` prompt). Anything you typed in in interactive mode will be treated as javascript, just like you are typing to the Chrome console.

3. Requiring other files and modules

    In a node.js file, you can export only the parts you want to other files requiring it:
    
    ``` js
    // a.js
    module.exports = {
        info: 123
    } 
    ```

    You can load this js file from another file in the same folder like this:
    
    ``` js
    // b.js
    var a = require('./a.js')
    console.log(a.info) // 123
    ```

    Finally, you can require bundled libraries/modules. Some of them come bundled with Node:

    ``` js
    // this loads Node's standard http library
    var http = require('http')
    ```

    If you want to use a module not default in Node, you need to install it via NPM (Node Package Manager). It's really simple. For example this command in Terminal will create a folder named `node_modules` and install the module named `express` into it:

    ``` bash
    npm install express
    ```

    Then, in a file in the same folder, you can now use the `express` module:

    ``` js
    var express = require('express')
    ```

## Code Examples

1. See the `in_class_examples` folder for the examples we went through in class. I have updated the comments.

2. See the `api` folder for the API example we went through in class. It's a bit messy but don't worry.

3. See the `express` folder for an example app using the Express framework. Read the comments and see how to use it. It makes building an app much easier. I highly suggest that you use express for this assignment.

## Assignment

1. Build a Node.js JSON API that gives back different data based on the URL.

2. Make a html page that documents how to use your API. Explain what routes are available, what parameters are needed to get what data, and provide a few examples of how to use it.

## Submission

Since deploying Node.js apps is not as easy as uploading through FTP, please zip it up and email to me. **NOTE: Please DO NOT include the `node_modules` folder!**