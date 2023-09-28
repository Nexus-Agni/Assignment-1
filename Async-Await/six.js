async function fetchDataFromAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Data fetched from API is : ", data);
    } catch (error) {
        console.log("Error encountered: ", error);
    }
}

fetchDataFromAPI();

// Output : Data fetched from API is :  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }