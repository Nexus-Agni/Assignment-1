let Users = {
    name: "Bruce Wayne",
    age : 35,
    email: "brucewayne222@gmail.com"
}
let arrUsers = Object.entries(Users)
let exampleMap = new Map(arrUsers)
console.log(exampleMap);
// Output : 
// Map(3) {
//     'name' => 'Bruce Wayne',
//     'age' => 35,
//     'email' => 'brucewayne222@gmail.com'
//   }

// Changing values
exampleMap.set("name", "Clark Kent")
console.log(exampleMap);
// Output: 
// Map(3) {
//     'name' => 'Clark Kent',
//     'age' => 35,
//     'email' => 'brucewayne222@gmail.com'
//   }