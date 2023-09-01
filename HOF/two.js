let delay = 1000 // in ms

setTimeout(()=>{
    console.log("3 sec remaining");
    setTimeout(()=>{
        console.log("2 sec remainging");
        setTimeout(()=>{
            console.log(Math.random());
        },delay)
    },delay)
},delay)

// output :  
// 3 sec remaining
// 2 sec remainging
// 0.8608950813971932
