var express = require('express'),
    app = express()

var data = [

    {
        name: 'Evan You',
        age: 25,
        gender: 'male'
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
    res.send('Hello! This is home')
})

// students
app.get('/people', function (req, res) {

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

        if (maxage && person.age > maxage) {
            qualified = false
        }

        if (minage && person.age < minage) {
            qualified = false
        }

        if (gender && person.gender !== gender) {
            qualified = false
        }

        // if still qualified after the checks, we can add this person
        // to the qualified list.
        if (qualified) {
            returnArray.push(person)
        }

    })

    if (callback) { // JSONP!
        res.send(callback + '(' + JSON.stringify(returnArray) + ')')
    } else {
        res.send(returnArray)
    }
})

app.listen(8080)

console.log('Server started on port 8080!')