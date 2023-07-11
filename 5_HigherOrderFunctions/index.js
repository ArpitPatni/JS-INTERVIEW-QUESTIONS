const radius = [1, 2, 3, 4];

const area = (radius) => {
  return 3.14 * radius * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
