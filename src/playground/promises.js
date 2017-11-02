const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Aleksey',
      age: 34
    });
    // reject('Something went wrong!');
  }, 5000);
});

console.log('Before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log('Error:', error);
});

console.log('After');
