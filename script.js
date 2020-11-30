// Existing artworks array
let book1 = { bookCover: `<img src="https://64.media.tumblr.com/ddbe258c372fc772cf22053494e1a0ab/tumblr_oei29uHFSd1vnd7blo4_500.png" width = "230">`, author: "Tender B. Cryin", title: "Save us, Son - If I Die I Go to Hell" };
let book2 = { bookCover: `<img src="https://64.media.tumblr.com/a8958755f56511e6cd57b1c2b8bcd27a/tumblr_oehwwz6C6v1vnd7blo1_400.png" width = "230">`, author: "Maureen Daly", title: "He Just Ate a Whole Bag of Cool Ranch Doritos" };
let book3 = { bookCover: `<img src="https://pbs.twimg.com/media/ElHG9JnU0AEJGuN?format=jpg&name=900x900" width = "230">`, author: "Jeff Hurting", title: "Here They Come, the Bats that Kicked My Ass" };

// STATE
let state = {
  headerText: "Paperpack Paradise Bookstore",
  books: [book1, book2, book3],
  sortBy: "author",
};

// Add book
const addBook = () => {
  console.log("add book here");
  let author = prompt("enter author name");
  let title = prompt("enter title");

  let newBook = {author: author, title: title };
  state.books.push(newBook);
  render();
};

// Update book
const updateBook = (index) => {
  console.log("update book here");
  console.log(index);
  let bookCoverUrl = prompt("enter book cover url");
  bookCover = `<img src="${bookCoverUrl}" width="230">`
  let author = prompt("enter author name");
  let title = prompt("enter title");

  state.books[index].author = author;
  state.books[index].title = title;
  state.books[index].bookCover = bookCover;

  render();
  
}

// Delete book
const deleteBook = (index) => {
  console.log(index);
  console.log("delete called");
  const filteredBook = state.books.filter((book, currentIndex) => {
    return currentIndex !== index;
  });
  state.books = filteredBook;
  render();
};


// Render
const renderBooks = () => {
  let htmlString = `<div class='list'>`;
  state.books.forEach((book, index) => {
    htmlString += `<div class='book'>
                    <div onclick='updateBook(${index})'>${book.bookCover}<br /> Author:&nbsp ${book.author}<br /> Title:&nbsp ${book.title}</div>
                    <button onclick='deleteBook(${index})'>delete</button>
                   </div><br />`
  });
  htmlString += `</div>`;
  return htmlString;
}

const render = () => {
  console.log("render called");
  let root = document.getElementById("root");
  let htmlString = `<h1>${state.headerText}</h1>`;
  htmlString += `<button id='add' onclick='addBook()'>add Book</button><br /><br />`;
  htmlString += renderBooks();
  root.innerHTML = htmlString;
};

render();
console.log("script loaded");
