function myFunc2() {
  console.log("Inside my func 2");
}

function myFunc(callback) {
  console.log("Do something");
  callback();
}

myFunc(myFunc2);
