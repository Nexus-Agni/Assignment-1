const arr = [1,22,99,"Hello",555,"John Cena",85]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (typeof element === "string") {
        console.log("This is the first string: " + element);
        break;
    }
}