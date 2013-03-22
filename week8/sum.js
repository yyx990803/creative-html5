var arguments = process.argv.slice(2)

var sum = 0

for (var i = 0; i < arguments.length; i++) {
    sum += parseInt(arguments[i], 10)
}

console.log(sum)