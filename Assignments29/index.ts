let Users: string[] = ["Admin", "User1", "User2", "User3"];

for (let i = 0; i < Users.length; i++) {
  if (Users[i] === "Admin") {
    console.log("Welcome MR. Admin!, would you like to see the results");
  } else {
    console.log(`Welcome ${Users[i]}, Thank you for logging in`);
  }
}
