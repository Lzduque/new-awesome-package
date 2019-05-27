function randomColor() {
  let randColorArr = ['pink', 'orange', 'light blue', 'green', 'cyan', 'magenta', 'light gree', 'blue', 'lilac', 'purple'];
  let randColor = Math.floor(Math.random() * Math.floor(randColorArr.length - 1));
  return `Your random color is ${randColorArr[randColor]}`
};

module.exports = randomColor;
