async function getDataFromMultipleAPI() {
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data1 = await response1.json();
        const data2 = await response2.json();
        const obj = {
            "todo": data1,
            "post" : data2
        }
    
        console.log(obj);
    } catch (error) {
        console.log("Error encountered", error);
    }

  
}
getDataFromMultipleAPI();

// Output : Data fetched from API is :  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }