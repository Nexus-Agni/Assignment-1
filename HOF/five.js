const regEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

let strToCheck1 = "https://pwskills.com/"
let strToCheck2 = "acde@123"

console.log(regEx.test(strToCheck1)); // True
console.log(regEx.test(strToCheck2)); // False