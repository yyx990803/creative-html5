function Son () {

}

Son.prototype = {
    //blah blah blah
    __proto__: Dad.prototype
}

function Dad () {

}

Dad.prototype = {
    ////....
}

/// Or .. you can do it the hard way

function Empty () {

}

Empty.prototype = Dad.prototype
var empty = new Empty()
Son.prototype = empty
