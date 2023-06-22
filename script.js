const array0 = [3, 2, 2, 3, 1, 45, 6, 8, 5, 2 ,25, 7, 121, 9];
const array1 = [3, 4, 2, 5, 56, 7, 4, 2, 43, 65, 3];

let intersect = (arr1, arr2) => {
    return arr1
        .filter(item => arr2.includes(item))
        // .reduce((x, y) => {
        //     if (x.includes(y)) {
        //         return x;
        //     }
        //     return [...x, y];
        // }, []);
        .filter((e, i, arr) => i === arr.indexOf(e));
}

console.log(intersect(array0, array1))