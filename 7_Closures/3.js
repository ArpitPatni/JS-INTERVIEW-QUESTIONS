function myFunc() {
  let count = 0;
  function myFunction() {
    if (count < 1) {
      console.log("You called me once");
      count++;
    } else {
      console.log("Me call ho chuka hu");
    }
  }
  return myFunction;
}
const ans = myFunc();
ans();
ans();
