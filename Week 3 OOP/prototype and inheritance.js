function ParentBook(){}

ParentBook.prototype.title = function(){
    return "The Alchemist";
}

function ChildBook(author){
    this.author = author
}

//Here we are extending the properties and methods of ChildBook to also contain
//the properties and methods of the ParentBook
ChildBook.prototype = new ParentBook// or  Object.create(ParentBook.prototype)

ChildBook.prototype.summary = function(){
    console.log(`The title of the book is ${this.title()}, and the author is ${this.author} `);
}

const book = new ChildBook("Paulo Coelho");

book.summary();