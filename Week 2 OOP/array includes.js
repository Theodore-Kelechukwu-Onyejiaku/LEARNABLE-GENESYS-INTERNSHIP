let book = [
    "The Alchemist",
    "Paulo Coelho",
    1987,
    4.5,
    "English"
]

console.log(book)
console.log(book.includes("Lord of the Rings")) //False
console.log(book.includes("The"))   //false

console.log(book.includes("The Alchemist")) //true
console.log(book.includes("Paulo Coelho"))  //true
console.log(book.includes(1987));   //true
console.log(book.includes("English"))

//NOTE: the includes() only works on arrays