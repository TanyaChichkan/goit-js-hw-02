

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Insert a number');


    const newInput = Number(input);
    if (Number.isNaN(newInput)) {
        alert('A type different from number was inserted. Try again');
        continue;
    }

    numbers.push(newInput);


} while (input !== null);

numbers.pop();
console.log(numbers);


for (let element of numbers) {
    total += element;

} console.log(`Total is ${total}`);



// let total = 0;
// let numbers = [];
// const insertUserInputRef = document.querySelector('input[name="userInput"]');

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function () {


//     const input = Number(insertUserInputRef.value);
//     console.log(input);
//     insertUserInputRef.value = '';
//     numbers.push(input);
//     console.log(numbers);



//     // if (input == '') {
//     //     // numbers.pop();
//     //     alert('Try again');
//     //     continue;

//     // }

//     if (Number.isNaN(input)) {
//         numbers.pop();
//         alert('Not a number');
//     }






//     for (let i = 0; i < numbers.length; i += 1) {
//         // console.log(element);
//         total += numbers[i];

//     }
//     // console.log(numbers);

//     console.log(`Total is ${total}`);



// });





