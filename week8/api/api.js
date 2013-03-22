var http = require('http'),
    fs   = require('fs')

// First, read all the data files

var citiesDataFile = fs.readFileSync('data/cities.json', 'utf-8'),
    citiesData = JSON.parse(citiesDataFile)

var characterFile = fs.readFileSync('data/characters.json', 'utf-8'),
    characterData = JSON.parse(characterFile)

// Then define our routes, or handler functions.

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

var server = http.createServer(function (request, response) {

    // find the position of the second slash
    var secondSlashIndex = request.url.indexOf('/', 1)

    // if there's no second slash...
    if (secondSlashIndex === -1) {
        // return 404
        response.end('404')

    } else {

        var route = request.url.slice(1, secondSlashIndex)
        var parameter = request.url.slice(secondSlashIndex + 1)

        // if route == 'character'
        // this line basically means
        // routes.character(parameter)

        // check if the route exists
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

server.listen(8080)