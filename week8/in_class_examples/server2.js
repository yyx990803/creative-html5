var http = require('http'),
    fs   = require('fs')

var server = http.createServer(function (request, response) {

    // read the file.
    //
    // remember! The first argument in the callback
    // is always the error!!!
    // If no error occured it will still get passed in as `null`

    fs.readFile('index.html', 'utf-8', function (err, file) {
        
        // here we are replacing things like {{...}} with some
        // dynamic data.
        file = file
                    .replace('{{whatever}}', request.url)
                    .replace('{{title}}', 'Hello world!')

        // then send it back
        response.end(file)

    })

})

server.listen(8080)