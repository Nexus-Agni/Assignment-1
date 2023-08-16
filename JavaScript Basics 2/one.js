let users = ["Mithun", "Akshay", "Shahrukh", "Salman", "Aamir"]

function isUserPresent(name) {
    if (users.includes(name)) [
        console.log(`Yes, ${name} is a valid user`)
    ]
    else {
        console.log(`No, ${name} is not a valid user`);
    }
}

isUserPresent("Mithun")
isUserPresent("Pankaj")