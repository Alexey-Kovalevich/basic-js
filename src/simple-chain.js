const CustomError = require("../extensions/custom-error");

const chainMaker = {
  allValues: [],

  getLength() {
    return this.allValues.length;
  },

  addLink(value) {
    if (value == undefined) {
      this.allValues.push('( null )');
    } else {
      this.allValues.push(`( ${value} )`);
    }

    return this;
  },

  removeLink(position) {
    if (position > this.allValues.length || position < 0 || typeof position != "number" || !Number.isInteger(position)) {
      this.allValues = [];
      throw new Error();
    }

    this.allValues = this.allValues.slice(0, position - 1).concat(this.allValues.slice(position));
    return this;
  },

  reverseChain() {
    this.allValues.reverse();
    return this;
  },
  
  finishChain() {
    let finishString = this.allValues.join("~~");
    this.allValues = [];
    return finishString;
  },
};

module.exports = chainMaker;
