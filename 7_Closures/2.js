function printFullName(firstName, lastName) {
  function printName() {
    //yeh function jaha present tha uski local memory ko sath leke return hoga
    console.log(firstName, lastName);
  }

  return printName;
}
const ans = printFullName("Arpit", "Patmi");
ans();
