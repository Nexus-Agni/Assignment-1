function createPromise(name) {
    return new Promise((resolve, reject) => {
        resolve(`Hello ${name}`);
    })
}

async function getPromise(name) {
    try {
        const resolved = await createPromise(name);
        console.log(resolved);
    } catch (error) {
        const rejected = await createPromise(name);
        console.log(rejected);
    }
    finally{
        console.log("Promise executed!!");
    }
}

const name = "John Cena";
getPromise(name);

// Output: 
//Hello John Cena
//Promise executed!!