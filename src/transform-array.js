const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  result = [];

  for (let i = 0; i < arr.length; i++) {

    switch(arr[i]) {
      case `--discard-next`:
        if (arr[i+2] === "--double-prev" || arr[i+2] === "--discard-prev") {
          i++;
        }
        i++;
        break;

      case `--discard-prev`:
        if (i != 0) {
          result.pop();
        }
        break;

      case `--double-next`:
        if (i != arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
        
      case `--double-prev`:
        if (i != 0) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(arr[i]);
        break;
    }
  };

  return result;

};