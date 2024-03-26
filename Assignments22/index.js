"use strict";
// Test 1
const num1 = 5;
const num2 = 10;
if (num1 < num2) {
    console.log("Test 1: num1 is less than num2");
}
else {
    console.log("Test 1: num1 is not less than num2");
}
// Prediction: Test 1: num1 is less than num2
// Test 2
const str1 = "apple";
const str2 = "banana";
if (str1.length > str2.length) {
    console.log("Test 2: str1 is longer than str2");
}
else {
    console.log("Test 2: str1 is not longer than str2");
}
// Prediction: Test 2: str1 is not longer than str2
// Test 3
const isRaining = false;
if (isRaining) {
    console.log("Test 3: It is raining");
}
else {
    console.log("Test 3: It is not raining");
}
// Prediction: Test 3: It is not raining
// Test 4
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("Test 4: User is logged in");
}
else {
    console.log("Test 4: User is not logged in");
}
// Prediction: Test 4: User is logged in
// test 5
const isMember = true;
if (isMember) {
    console.log("Test 5: User is member");
}
else {
    console.log("Test 5: User is member");
}
// Prediction: Test 5: User is Member
// Test 6
const isPakistani = false;
if (isPakistani) {
    console.log("Test 6: User is Pakistani National");
}
else {
    console.log("Test 6 User is not Pakistani National");
}
// Prediction: Test 6: User is not Pakistan National
// Test 7
const temperature = 25;
if (temperature >= 30) {
    console.log("Test 7: It's a hot day");
}
else if (temperature < 30 && temperature >= 20) {
    console.log("Test 7: It's a pleasant day");
}
else {
    console.log("Test 7: It's a cold day");
}
// Prediction: Test 7: It's a pleasant day
// Test 8
const hasMembership = true;
const itemsInCart = 5;
if (hasMembership || itemsInCart > 10) {
    console.log("Test 8: Free shipping is available");
}
else {
    console.log("Test 8: Free shipping is not available");
}
// Prediction: Test 8: Free shipping is available
// Test 9
const age = 18;
if (age < 18) {
    console.log("Test 9: You are not eligible to vote");
}
else {
    console.log("Test 7: You are eligible to vote");
}
// Prediction: Test 9: You are eligible to vote
// Test 10
const isWeekend = true;
const isSunny = false;
if (isWeekend && isSunny) {
    console.log("Test 8: Let's go for a picnic");
}
else if (isWeekend && !isSunny) {
    console.log("Test 8: Let's watch a movie at home");
}
else {
    console.log("Test 8: It's a weekday, back to work");
}
// Prediction: Test 10: Let's watch a movie at home
