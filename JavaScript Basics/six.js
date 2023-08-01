let name = "John Cena"
let email = "johncena@wwe.com"
let age = 44

if ((typeof name === "string") && (typeof email === "string") && (typeof age === "number")) {
    console.log("Validation successful");
} else if (typeof name !== "string") {
    console.log("Name should be string");
} else if (typeof email !== "string") {
    console.log("Email should be string");
} else if (typeof age !== "number"){
    console.log("Age should be number");
} else {
    console.log("Check the input types");
}