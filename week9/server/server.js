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
        gender = req.query.gender

    var returnArray = []

    data.forEach(function ( person ) {

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

        if (qualified) {
            returnArray.push(person)
        }

    })

    res.send(returnArray)
})

app.listen(8080)

console.log('Server started on port 8080!')