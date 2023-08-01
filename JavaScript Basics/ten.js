let array = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10];

// Printing positive numbers
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 0) {
        console.log(element);
    }
}