//Creating a constructor
function Book(title, year, page){
    this.title = title
    this.year = year
    this.page = page
}

//Creating instances
const book1 = new Book("The Alchemist", 1987, 45);
const book2 = new Book("Things Fall Apart", 1970, 88);

console.log(book1);
console.log(book2);

console.log(book1.title);   //The Alchemist