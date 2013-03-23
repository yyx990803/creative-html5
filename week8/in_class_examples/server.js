var http = require('http'),
    fs   = require('fs')

var posts = [
    {
        title: 'hello'
    }
]

var server = http.createServer(function (request, response) {

    if (request.url === '/') {

        fs.readFile('index.html', 'utf-8', function (err, file) {
            response.end(file)
        })

    } else if (request.url === '/posts') {

        response.end(JSON.stringify(posts))

    } else if (request.url === '/users') {

        response.end('users')

    } else {

        response.end('404')

    }

})

server.listen(8080)