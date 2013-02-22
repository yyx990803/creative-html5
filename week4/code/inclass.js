function sum (a, b, callback) {
    var result = a + b
    if (callback) {
        callback()
    }
}

sum(1, 2)