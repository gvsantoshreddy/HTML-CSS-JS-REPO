// 42. Callbacks, Promises, and async/await
function callbackExample(callback) {
  setTimeout(() => callback("Callback completed"), 500);
}
callbackExample(message => console.log(message));

const promise = new Promise(resolve => {
  setTimeout(() => resolve("Promise completed"), 500);
});
promise.then(console.log);

async function asyncExample() {
  const result = await promise;
  console.log("Async/await:", result);
}
asyncExample();
