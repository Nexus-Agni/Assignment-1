let bookList = [
    {
        "name": "Malgudi Days",
        "year" : 1982,
        "author": "R K Narayan"
    },
    {
        "name": "Gitanjali",
        "year" : 1911,
        "author": "Rabindranath Tagore"
    },
    {
        "name": "The Flamethrower",
        "year" : 2011,
        "author": "Rachel Kushner"
    },
    {
        "name": "The Tigers wife",
        "year" : 2013,
        "author": "Joe Morrison"
    }
]

let resultList = bookList.filter((element)=>{
   return  element.year >=2010;
})
resultList.forEach((element)=>{
    element.author = element.author.toUpperCase()
})
console.log(resultList);

// Output: 
// [
//     { name: 'The Flamethrower', year: 2011, author: 'RACHEL KUSHNER' },
//     { name: 'The Tigers wife', year: 2013, author: 'JOE MORRISON' }
//   ]