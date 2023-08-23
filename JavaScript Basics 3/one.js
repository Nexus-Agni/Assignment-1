let car = {
    "make" : "Metal Body",
    "model": "Mahindra Thar",
    "year" : 2021
}

let properties = Object.keys(car)
console.log(properties);

for (let property of properties) {
    console.log(property);
}

// Output :
// [ 'make', 'model', 'year' ]
// make
// model
// year