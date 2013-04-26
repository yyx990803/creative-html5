MyProject.component2 = (function () {

    console.log('component 2 initiated!')

    var myPrivateVariable = 'no one else can see me!'

    // things here will be executed when page loads

    var api = {

        boot: function () {
            console.log('component 2 booted')
        },

        hello: function () {
            console.log('hello from component2!')
        }
    }

    return api

})()