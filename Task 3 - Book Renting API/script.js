var close_modal_btn = document.getElementById("close_modal");
var bookList = document.getElementById("books");
var no_BooksAvail = document.getElementById("books_available");
var no_RentedBooks = document.getElementById("books_rented");
var number = 0;
var modalBox = document.getElementById("modal_box");
var rentedBookTitle = document.getElementById("rented_book_title")
var rentedBookAuthor = document.getElementById("rented_book_author")
var searchResultInfo = document.querySelector(".result");
var searchInput = document.getElementById("search_value");

var id = 0;
var books = [
  { title: "Things Fall Apart", author: "Chinua Achebe" },
  { title: "Purple Hibiscus", author: "Chimamanda Adichie" },
  { title: "Oliver Twist", author: "Charles Dickens" },
  { title: "Gifted Hands", author: "Ben Carson" },
  { title: "The Alchemist", author: "Paulo Coelho" }
]
var searchedBooks = [];

//Use this array and render in the DOM
function displayBooks() {
  bookList.innerHTML = ""
  books.forEach(book => {
    bookList.insertAdjacentHTML("beforeend",
      `<tr id=${id} class="bookRow"> 
              <td class="title">${book.title}</td>
              <td>${book.author}</td>
              <td><button class="btn btn-success" onclick="rent(${id})">Rent</button></td>
        </tr>`)
    id++;
  })
  no_BooksAvail.innerHTML = books.length;
}

// render books
displayBooks();

//Rent Function
function rent(index) {
  number++;
  modalBox.style.display = "block";
  document.querySelector(".container").style.opacity = "0.1"
  rentedBookTitle.innerHTML = books[index].title;
  rentedBookAuthor.innerHTML = books[index].author;
 document.getElementById(`${index}`).remove();
  no_BooksAvail.innerHTML = Number(no_BooksAvail.innerHTML) - 1;
  no_RentedBooks.innerHTML = number;
}

//Function to close modal
function closeModal() {
  modalBox.style.display = "none";
  document.querySelector(".container").style.opacity = "1"
}

// search function
function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  var filter = searchInput.value.toUpperCase();
  var list = bookList.getElementsByTagName("tr")
  for (i = 0; i < list.length; i++) {
    var bookTitle = list[i].querySelectorAll(".title")[0];
    var bookTitleValue = bookTitle.textContent || bookTitle.innerText;
    if (bookTitleValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

//Scrolling option
var navBarItem = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    navBarItem.style.backgroundColor = "#0ad05b";
  } else {
    navBarItem.style.backgroundColor = "transparent";
  }
});