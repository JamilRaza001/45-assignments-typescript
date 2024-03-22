let places:string[] = ["New Zealand","Iceland","Japan","Switzerland","Norway"];

console.log("Original order:",places);

console.log("Alphabetical order:",[...places].sort());

console.log("Original order:",places);

console.log("Reverse Alphabetical order:",[...places].sort().reverse());

console.log("Original order:",places);

places.reverse();
console.log("Original order:",places);

places.sort()
console.log("Alphabetical order:",places);

places.reverse()
console.log("Reverse Alphabetical order:",places);
