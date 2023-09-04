function temporalDeadZone () {
    console.log(a); //  Output: This will result in a ReferenceError
    let a = 10;
    console.log(a);
}

temporalDeadZone()

