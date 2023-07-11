var firstName = "Arpit Outside";

var obj = {
  firstName: "Arpit Inside",
  getName: function () {
    console.log("Normal function", this.firstName);
  },
  getNameArrow: () => {
    console.log("Arrow function", this.firstName);
  },
};

obj.getName();
obj.getNameArrow();

function getArgs(a, b) {
  console.log(JSON.stringify(arguments));
}
getArgs(4, 4);
