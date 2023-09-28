const obj = {
    "firstName" : "Agnibha",
    "lastName": "Chakraborty",
    "age": 20
}
function ageInDays(obj, callback) {
    const fullName = obj.firstName+" "+obj.lastName;
    const ageindays = obj.age*365;
    callback(fullName, ageindays);
}
function callback(fullName, ageindays) {
    console.log(`The person is ${fullName} and age is ${ageindays} days`);
}

ageInDays(obj, callback);

// Output : The person is Agnibha Chakraborty and age is 7300 days