const products = [
    {name: "Laptop", price: "120000"},
    {name: "Mobile", price: "70000"},
    {name: "Laptop Bag", price: "20000"},
    {name: "Watch", price: "20000"},
    {name: "Mobile charger", price: "1500"},
]

let minProduct = {name:" ", price: Number.MAX_VALUE} // Something which is very big
let maxProduct = {name:" ", price: 0}

for (let product of products) {
    if (product.price > maxProduct.price) {
        maxProduct = product;
    }
    if (product.price < minProduct.price) {
        minProduct = product;
    }
}

console.log(`Product with the minimum price is ${minProduct.name}`);
console.log(`Product with the maximum price is ${maxProduct.name}`);