async function sleep(time) {
    // let promise = new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(`Время сна прошло`);
    //     }, time);
    // });
    // promise.then(res => console.log(res));

    setTimeout(() => {
        console.log(`Время сна прошло`);
    }, time);
}

async function other() {
    await sleep(3000);
    console.log(`Сон`);
}

other();