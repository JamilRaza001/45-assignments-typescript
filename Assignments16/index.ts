// Creating a string array
let GustList: string[] = ["Raza", "Jamil", "Adil", "Omer"];

// Using splice method to remove two values from array 
GustList.splice(2, GustList.length);

// Storing message in variable
let message: string =
  "How about joining me for dinner tonight? I'm cooking up something delicious and would love to catch up over a meal together.";

//using for loop to print

for (let i: number = 0; i < GustList.length; i++) {
  console.log(`Hey ${GustList[i]}`, message, `\n`);
}
