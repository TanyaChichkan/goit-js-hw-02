
const checkForSpam = function (message) {

    const messageIncludes = message.toLowerCase().includes("sale") ||
        message.toLowerCase().includes("spam");

    return messageIncludes ? true : false;


};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



// const checkForSpam = function (message) {
//     if (message.toLowerCase().includes("sale") ||
//         message.toLowerCase().includes("spam")) {
//         return true;
//     } return false;

// };



// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true