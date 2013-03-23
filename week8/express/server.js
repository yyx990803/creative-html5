//
// READ THIS BEFORE YOU RUN IT
//
// As you can see, this file requires a module called 'express',
// which doesn't come bundled with Node by default.
// Therefore we need to install it with NPM (Node Package Manager).
//
// Open terminal, navigate to this folder, then run this command:
//
//     npm install express
//
// This will create a folder called 'node_modules' in the current
// folder and install the express module inside it.
//
// Alternatively you can do:
//
//     npm install -g express
//
// This will install the express module GLOBALLY. Which means
// you will be able to `require('express')` from anywhere on your
// machine after you do this.

var express = require('express'),
    app = express()

// with express, defining routes become much simpler:

app.get('/', function (request, response) {
    // this function gets called when
    //   localhost:8080
    // is visited
    response.send('Hello! This is the home page')
})

app.get('/characters/:name', function (request, response) {
    // this function gets called when
    //   localhost:8080/characters/(anything here)
    // is visited

    // note the ':name' in the second route here!
    // it means we want express to extract that part for us
    // and it will be stored in the `request.params` object.

    // e.g. localhost:8080/characters/Tyrion
    // - `request.params.name` will be 'Tyrion'

    var name = request.params.name

    // Another important feature express provides
    // is it also extracts the queries in the URL!

    // e.g. localhost:8080/characters/Tyrion?book=1&chapter=3
    // - `request.query.book` will be 1
    // - `request.query.chapter` will be 3
    var book = request.query.book,
        chapter = request.query.chapter

    var responseText = 'You requested character: ' + name

    if (book) {
        responseText += ' in Book ' + book
    }

    if (chapter) {
        responseText += ' in Chapter ' + chapter
    }

    response.send(responseText)
})

app.listen(8080)