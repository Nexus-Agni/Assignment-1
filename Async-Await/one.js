function hof(arr, doubling){
   return doubling(arr)
}

function doubling(arr) {
   const newArr = [];
   arr.forEach(element => {
    element=element*2;
    newArr.push(element);
   });
   return newArr
}

const arr = [1,2,3,4,5];
console.log(hof(arr,doubling));

// Output:
// [ 2, 4, 6, 8, 10 ]