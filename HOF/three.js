let priceInDollar = {
    "item1" : 20,
    "item2" : 30,
    "item3" : 40,
    "item4" : 50
}
console.log("Price in dollars: ", priceInDollar);
let values = Object.values(priceInDollar)

let newValues = []
values.map((element)=>{
    let result = element+80;
    newValues.push(result)
})

let priceInRupees = new Object(priceInDollar)

let i=0;
Object.keys(priceInRupees).forEach((keys)=>{
    priceInRupees[keys]=newValues[i];
    i++;
})
console.log("Price in rupees: ",priceInRupees);

// Output:
// Price in dollars:  { item1: 20, item2: 30, item3: 40, item4: 50 }
// Price in rupees:  { item1: 100, item2: 110, item3: 120, item4: 130 }