const objexample = {
    name : "Undertaker",
    company : "WWE",
    age : 60
}

// Checking whether the key is present or not
console.log(Object.hasOwn(objexample, "company")); // Output : True
console.log(Object.hasOwn(objexample, "Salary")); // Output: False

