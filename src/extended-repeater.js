let CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = String(str);


  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? String(options.separator) : '+';
  let addition = (options.addition !== undefined) ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? String(options.additionSeparator) : '|';
  let additionRepStr = ``;

  if ( additionRepeatTimes || addition ) {
    let additionRepArr = [];

    for (let i = 1; i <= additionRepeatTimes; i++) {
      additionRepArr.push(addition);
    }

    additionRepStr = additionRepArr.join(additionSeparator);
  }

  newStr = `${newStr}${additionRepStr}`;

  if ( newStr || repeatTimes ) {
    let repeatArr = [];

    for (let i = 1; i <= repeatTimes; i++) {
      repeatArr.push(newStr);
    }

    newStr = repeatArr.join(separator);
  }

  return newStr;
};
  