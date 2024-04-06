"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Magicians = ["John", "Smith", "Mike"];
function Magic() {
    for (let i = 0; i < Magicians.length; i++) {
        let result = Magicians[i];
        console.log(result);
    }
}
function Magic2(great) {
    for (let i = 0; i < Magicians.length; i++) {
        let result = Magicians[i];
        console.log(`${great} ${result}`);
    }
    ;
}
;
Magic();
Magic2("The Great");
