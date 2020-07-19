

const calculateEngravingPrice = function (message, pricePerWord) {
    const arr = message.split(" ");
    const index = arr.length;
    const totalPrice = pricePerWord * index;
    return totalPrice;
};



const r1 = calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,);
console.log(r1);


console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
);

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);