#!/usr/bin/env node

// Maps - stores key,value pairs of any datatype...similar to python dictionaries

const store = new Map([
    ["trousers", 10],
    ["T-Shirt", 15],
    ["jeans", 50]
]);

store.forEach((value, key) => console.log(key, value));

store.set("underwear", 20)
console.log(store.get("T-Shirt"))
store.delete("T-Shirt")
console.log(store.has("T-Shirt"))
