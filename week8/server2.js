var http = require('http'),
    fs   = require('fs')

var posts = [
    {
        title: 'hello'
    }
]

var server = http.createServer(function (request, response) {

    fs.readFile('index.html', 'utf-8', function (err, file) {
        
        file = file.replace('{{whatever}}', request.url)

        response.end(file)

    })

})

server.listen(8080)