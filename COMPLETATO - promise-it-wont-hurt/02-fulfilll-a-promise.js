var promise = new Promise((fulfill, reject) => {
    setTimeout(function () {
        fulfill('FULFILLED!');
        }, 300);
});

  
promise.then(console.log)
  