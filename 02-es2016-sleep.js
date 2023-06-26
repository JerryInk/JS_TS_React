// Не блокирует вывод
async function sleep(time) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Время сна прошло`);
        }, time);
    });
    promise.then(res => console.log(res));
    //return promise;

    // setTimeout(() => {
    //     console.log(`Время сна прошло`);
    // }, time);
}

// Блокирует вывод (из-за возврата промиса!)
// const sleep = async (time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(time), time);
//     });
// }

async function other(time) {
    await sleep(time);
    //console.log(`Прошло ${time} мс.`);
    console.log(`Сон начался`);
}

other(3000);