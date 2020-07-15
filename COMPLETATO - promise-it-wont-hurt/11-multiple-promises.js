function all(promise1, promise2) {

    let promise = new Promise((ful, rej) => {
        let counter = 0;
        let out = [];
        
        promise1.then((val) => {
            counter++
            out[0] = val
            if (counter == 2) {
                ful(out)
            }
        })

        promise2.then((val) => {
            counter++
            out[1] = val
            if (counter == 2) {
                ful(out)
            }
        })

    })

    return promise;
}

all(getPromise1(), getPromise2())
  .then(console.log);