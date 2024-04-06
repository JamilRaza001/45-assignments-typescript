let CurrentUsers = ["user1", "user2", "user3", "user4"];
let NewUsers = ["user1", "user2", "user3", "user4"];
NewUsers.forEach((NewUsers) => {
    if (CurrentUsers.some((CurrentUsers) => CurrentUsers.toLowerCase() === NewUsers.toLocaleLowerCase())) {
        console.log(`${NewUsers} username is not available`);
    }
    else {
        console.log(`${NewUsers} username is available`);
    }
});
export {};
