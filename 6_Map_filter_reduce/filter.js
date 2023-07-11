// const arr = [1, 2, 3, 4, 5];

// const odds = arr.filter((item) => item % 2);
// const evens = arr.filter((item) => item % 2 === 0);

// console.log(odds);
// console.log(evens);
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }

  console.log("namaste JS");
}
x();
