import ShowBooksList from "./ShowBooksList.js";

const addBookForm = document.getElementById("addForm");
const searchForm = document.getElementById("searchForm");

let books = JSON.parse(localStorage.getItem("books")) || [];

window.onload = () => {
  ShowBooksList(books);
};

addBookForm.onsubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const isComplete = document.getElementById("isComplete").checked;
  const id = books.length + 1;

  books.push({
    title,
    author,
    year,
    isComplete,
    id,
  });

  localStorage.setItem("books", JSON.stringify(books));
  ShowBooksList(books);
};

searchForm.onsubmit = (event) => {
  event.preventDefault();
  const search = document.getElementById("search").value;
  ShowBooksList(books, search);
};
