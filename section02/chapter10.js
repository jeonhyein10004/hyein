// then 메서드
// -> 그 후에

Promise.then((value) => {
    console.log(value);
});

Promise.catch((error) => {
    console.log(error);
});

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
});