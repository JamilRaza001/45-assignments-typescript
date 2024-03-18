let GustList = ["Adil Ashgar", "Shoaib Mushtaq", "Omer Memon"];
let message = "How about joining me for dinner tonight? I'm cooking up something delicious and would love to catch up over a meal together.";
let a = 1;
if (a = 0) {
    for (let i = 0; i <= 2; i++) {
        console.log(`Hey ${GustList[i]}`, message);
    }
}
else {
    console.log(`${GustList[0]} can't attend dinner.\n`);
    GustList[0] = "Ali Mushtaq";
    for (let i = 0; i <= 2; i++) {
        console.log(`Hey ${GustList[i]}`, message, '\n');
    }
}
export {};
