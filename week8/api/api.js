var http = require('http'),
    fs   = require('fs')

var routes = {

    // the character method
    character: function (name) {

        var data = {
            name: 'You gave me: ' + name
        }

        return data

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
        var data = routes[route](parameter)

        response.end(JSON.stringify(data))
    }

})

server.listen(8080)