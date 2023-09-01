let input = "PWSKILLS JAVASCRIPT";

setTimeout((text) => {
    let inputArr = text.split("");
    let outputArr = inputArr.reverse();

    let output = outputArr.join("");
    console.log(output);
}, 2000, input);


// Output : TPIRCSAVAJ SLLIKSWP