

const arr = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const arr2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


const logItems = function (items) {
    let newArr = [];
    for (let i = 0; i <= items.length - 1; i += 1) {
        const newText = [i + 1] + '-' + items[i];
        newArr.push(newText);
    } return newArr;
};

console.log(logItems(arr));
console.log(logItems(arr2));