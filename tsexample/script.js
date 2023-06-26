// function increment(x: number): number {
//     return x + 1;
// }
// let variable: string = "Hello!";
// console.log(increment(variable));
// let isGood = true;
// isGood = "good";
// console.log(`TypeScript is ${isGood}`);
// let flag: boolean = false;
// let length: number = 6;
// let name: string = "Ivan";
// console.log(`${flag} ${length} ${name}`);
// let someArray: number[] = [1, 2, 3];
// let anotherArray: Array<number> = [1, 2, 3];
// for (let i: number = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
// }
// for (const elem of anotherArray) {
//     console.log(elem);
// }
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var light = Color.Red;
console.log(light);
