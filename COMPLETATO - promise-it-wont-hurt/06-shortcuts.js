var promise = new Promise(function (fulfill, reject) {
    fulfill('SECRET VALUE');
  });

  promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
  });
  
  var promise = Promise.resolve('SECRET VALUE');
  
  var promise = new Promise(function (fulfill, reject) {
    reject(new Error('SECRET VALUE'));
  });
  
  var promise = Promise.reject(new Error('SECRET VALUE'));