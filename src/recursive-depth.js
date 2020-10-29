const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let elem of arr) {
      let depth = 1;

      if (Array.isArray(elem)) {
        depth += this.calculateDepth(elem);
        maxDepth = (depth > maxDepth) ? depth : maxDepth;
      }
    }
    return maxDepth;
  }
};