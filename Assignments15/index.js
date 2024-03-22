"use strict";
let GusList = ["Adil", "Shoaib", "Omer"];
GusList.unshift("Raza");
GusList.push("Imran");
GusList.splice(3, 0, "Jamil");
let message = "How about joining me for dinner tonight? I'm cooking up something delicious and would love to catch up over a meal together.";
for (let i = 0; i < GusList.length; i++) {
    console.log(`Hey ${GusList[i]}`, message, `\n`);
}
