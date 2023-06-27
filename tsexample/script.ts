// const myLog: (string) => void =
//     (message: string) => console.log(message);

// myLog("Hello");

// const complexResponse: () => [string, number] =
//     () => ["Ivan", 34];

// console.log(complexResponse());

// Inline iterface
// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


// Iterface
// interface LabelledValue {
//     label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface Square {
//     width: number;
// }

// const calcSquareArea = (sq: Square) => { 
//     return sq.width * sq.width; 
// }

// let square = { width: 5 };

// console.log(calcSquareArea(square));