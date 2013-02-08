// Closure is an advaned concept. You probably will not need it for your projects.
// Don't worry if you find it confusing for now.

var global = 'i am global'

var closureObject = (function () {

    console.log(global) // 'i am global'

    // this will never be accessible from outside this function's scope
    var privateVar = 'i am private'

    var publicVar = 'i am public'
    
    var exposed = {
        getPublicVar: function () {
            // because exposed is defined in this scope, it has access to publicVar.
            return publicVar
        },

        // The problem with this is that if publicVar is later changed inside the closure,
        // you will not get the updated value. (exposed.publicVar will always be 'public')
        publicVar: publicVar
    }

    return exposed

})() // The parentheses here invokes the anonymous function immediately.
     // The return value (exposed) is then assigned to closureObject.

closureObject.getPublicVar() // 'i am public'