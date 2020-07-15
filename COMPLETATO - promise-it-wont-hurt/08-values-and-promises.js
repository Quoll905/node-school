function attachTitle (arg) {
    return 'DR. ' + arg
}

let promise = new Promise((fulfill, reject) => {
    fulfill('MANHATTAN')
})

promise.then(attachTitle).then(console.log)