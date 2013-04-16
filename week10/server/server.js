var express = require('express'),
    app = express()

// just some fake data.
// you should roll your own.
var data = [

    {
        name: 'Evan',
        age: 25,
        gender: 'male',
        avatar: 'fselkjfslefjf.jpg'
    },

    {
        name: 'Burak',
        age: 20,
        gender: 'male'
    },

    {
        name: 'Cynthia',
        age: 20,
        gender: 'female'
    },

    {
        name: 'Daniel',
        age: 20,
        gender: 'male'
    },

    {
        name: 'Robert',
        age: 20,
        gender: 'male'
    },

    {
        name: 'Jennifer',
        age: 20,
        gender: 'female'
    },

    {
        name: 'Rachal',
        age: 20,
        gender: 'female'
    }

]

// home
app.get('/', function (req, res) {
    var returnString = 'Welcome to the people API. Please use /people to get people data!!!'
    res.send(returnString)
})

// students
app.get('/people', function (req, res) {

    // get all the possible query values.
    // note if the url doesn't contain a certain value
    // it will be undefined here
    var maxage = req.query.maxage,
        minage = req.query.minage,
        gender = req.query.gender,
        callback = req.query.callback

    // a temporary array to hold our qualified list
    var returnArray = []

    // loop through the entire dataset
    data.forEach(function ( person ) {

        // assume this person is qualified to begin with.
        var qualified = true

        // check max age
        if (maxage && person.age > maxage) {
            qualified = false
        }

        // check min age
        if (minage && person.age < minage) {
            qualified = false
        }

        // check gender
        if (gender && person.gender !== gender) {
            qualified = false
        }

        // if still qualified after the checks, we can add this person
        // to the qualified list.
        if (qualified) {
            returnArray.push(person)
        }

    })

    if (callback) {
        // JSONP!
        res.send(callback + '(' + JSON.stringify(returnArray) + ')')
    } else {
        // just a normal request.
        // this WILL be restricted by the same-origin policy.
        res.send(returnArray)
    }
})

// start everything.
app.listen(8080)
console.log('Server started on port 8080!')