// the http module allows us to create a server
var http = require('http')

// the fs module allows us to read and write files to disk
var fs   = require('fs')

// First, read all the data files =============================================

// you can directly require JSON files!
var citiesData = require('./data/cities.json'),
    characterData = require('./data/characters.json')

// Then define our routes, or handler functions. ==============================

var routes = {

    characters: function (name) {

        if (name === 'all') {
            return characterData
        }

        // go through every entry in characterData
        // and return the one that matches the name
        for (var i = 0; i < characterData.length; i++) {
            var character = characterData[i]
            if (character.name === name) {
                return character
            }
        }

        return {
            error: 'character not found'
        }

    },

    cities: function (name) {

        if (name === 'all') {
            return citiesData
        }

        for (var i = 0; i < citiesData.length; i++) {
            var city = citiesData[i]
            if (city.name === name) {
                return city
            }
        }

        return {
            error: 'city not found'
        }

    }

}

// Now it's time to create the server! ========================================

var server = http.createServer(function (request, response) {

    // find the position of the second slash
    var secondSlashIndex = request.url.indexOf('/', 1)

    // if there's no second slash...
    if (secondSlashIndex === -1) {
        // return 404
        response.end('404')

    } else {

        // extract the information

        // route is the characters between first and second slashes
        var route = request.url.slice(1, secondSlashIndex)

        // parameter is the characters after the second slash
        var parameter = request.url.slice(secondSlashIndex + 1)

        // check if the route exists in our routes object
        if (routes[route]) {

            // call that route function with the parameter
            // and get the returned data
            var data = routes[route](parameter)

            // convert the data into plain string
            // and send it back to browser
            response.end(JSON.stringify(data))

        } else {

            response.end('404')

        }

    }

})

// Finally, you need to make the server listen to a port. =====================

server.listen(8080)