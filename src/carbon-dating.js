const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    
    let numSampleActivity = parseInt(sampleActivity);

    if (isNaN(numSampleActivity) || 
        numSampleActivity <= 0 || 
        typeof(SampleActivity) !== 'string') {
            return false;
    }

    let k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / numSampleActivity) / k;

    return age;
};
