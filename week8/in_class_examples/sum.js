// the `process.argv` object contains every single argument
// from the command line, including `node` and the path to `sum.js`.
// therefore we only want the part that's after the first two.
var arguments = process.argv.slice(2)

var sum = 0

// go through all arguments and add them together
for (var i = 0; i < arguments.length; i++) {

    var arg = arguments[i]

    // because everthing is parsed as a string
    // we need to convert it into an integer.
    // The 10 means we want a decimal number.
    // The default is octal (which is weird but you need to know)
    sum += parseInt(arg, 10)
}

console.log(sum)