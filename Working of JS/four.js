function demonstrateVariableHoisting() {
    // Using 'let'
    console.log("Before 'let' declaration:", letVar); // This will log 'undefined' due to hoisting
    let letVar = 10; // Declare and initialize 'letVar' using 'let'
    console.log("After 'let' declaration:", letVar); // This will log '10'
  
    // Using 'var'
    console.log("Before 'var' declaration:", varVar); // This will log 'undefined' due to hoisting
    var varVar = 20; // Declare and initialize 'varVar' using 'var'
    console.log("After 'var' declaration:", varVar); // This will log '20'
  
    // Using 'const'
    console.log("Before 'const' declaration:", constVar); // This will result in a ReferenceError
    const constVar = 30; // Declare and initialize 'constVar' using 'const'
    console.log("After 'const' declaration:", constVar); // This will not be reached due to the ReferenceError
  }
  
  // Call the function to demonstrate variable hoisting
  demonstrateVariableHoisting();
  