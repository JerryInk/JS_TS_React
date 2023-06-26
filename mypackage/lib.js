const pi = 3.1415926;
const e = 2.718281828;

const average = (...args) => {
    return args.reduce((a, b) =>  a + b, 0) / args.length;
}

// module.exports = { 
//     PI: pi,
//     E: e,
//     avg: average,
// }

export { 
    pi as PI,
    e as E,
    average as avg
}

// export default average;

// console.log(module);