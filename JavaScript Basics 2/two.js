function calculateTotalCartValue() {
    let sum = 0
    for (let i = 0; i< arguments.length ; i++) {
        sum = sum + arguments[i]
    }
    return sum
}

console.log(`The total sum is :` + calculateTotalCartValue(10,20,30,40));