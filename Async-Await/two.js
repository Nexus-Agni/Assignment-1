function manipulateStr(str, logStr) {
    const newStr = str.toUpperCase();
    logStr(newStr);
}
function logStr(newstr) {
    console.log("The manipulated String is : ", newstr);
}
let str = "Hi, I am learning javascript"
manipulateStr(str, logStr)

// Output : The manipulated String is :  HI, I AM LEARNING JAVASCRIPT