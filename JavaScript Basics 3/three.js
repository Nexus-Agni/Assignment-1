let inputObject = {
    name : "John Cena",
    profession : "Wrestling",
    country : "USA",
    age : 40
}
// Key value pairs
let iterable = Object.entries(inputObject)
for (let items of iterable) {
    console.log(items);
}
// Keys only
let keys = Object.keys(inputObject)
for (let items of keys) {
    console.log(items);
}
// Values only
let value = Object.values(inputObject)
for (let items of value) {
    console.log(items);
}

// Output : 
// [ 'name', 'John Cena' ]
// [ 'profession', 'Wrestling' ]
// [ 'country', 'USA' ]
// [ 'age', 40 ]
// name
// profession
// country
// age
// John Cena
// Wrestling
// USA
// 40