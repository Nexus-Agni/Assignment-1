const books = [
    {
        "name" : "Maludi Days",
        "author" : "R K Narayanan",
        "year" : 1943
    },
    {
        "name" : "The great India novel",
        "author" : "Shashi Tharoor",
        "year" : 1989
    },
    {
        "name" : "Geetanjali",
        "author" : "Rabindranath Tagore",
        "year" : 1911
    },
    {
        "name" : "Arthashastra",
        "author" : "Chanakya",
        "year" : "12th century"
    }
]

function newArrayFormation(arr,callback) {
    const map1 = arr.map((value)=>{
        return value.name ;
    })

    callback(map1);
}

function callback(map) {
    map.sort();
    console.log(map.join(" ,"));
}

newArrayFormation(books, callback);

// Output : Arthashastra ,Geetanjali ,Maludi Days ,The great India novel