MyProject.component1 = (function () {

    console.log('component 1 initiated!')

    var myPrivateVariable = 'no one else can see me!'

    // things here will be executed when page loads

    var api = {

        boot: function () {
            console.log('component 1 booted!')

            MyProject.component2.hello()

        }

    }

    return api

})()