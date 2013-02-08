var global = 'global'
var thing = (function () {

    var privateVar = 'private'
    var publicVar = {
        data: 1
    }
    
    return {
        publicVar: publicVar
    }

})()