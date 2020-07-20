

// let input;
// const numbers = [];
// let total = 0;

// do {
//     input = prompt('Insert a number');


//     const newInput = Number(input);
//     if (Number.isNaN(newInput)) {
//         alert('A type different from number was inserted. Try again');
//         continue;
//     }

//     numbers.push(newInput);


// } while (input !== null);

// numbers.pop();
// console.log(numbers);


// for (let element of numbers) {
//     total += element;

// } console.log(`Total is ${total}`);




let numbers = [];
const insertUserInputRef = document.querySelector('input[name="userInput"]');

const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {

    let total = 0;
    const input = Number(insertUserInputRef.value);
    // console.log(input);
    insertUserInputRef.value = '';
    numbers.push(input);
    console.log(numbers);

    for (let number of numbers) {
        total += number;
    }


    console.log(total);

    // if (input == '') {
    //     numbers.pop();
    //     alert('Try again');
    // }


    // if (Number.isNaN(input)) {
    //     numbers.pop();
    //     alert('Not a number');
    // }


});






