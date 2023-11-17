import BookCard from "./BookCard.js";

const uncompletedShelf = document.getElementById("uncompletedShelf");
const completedShelf = document.getElementById("completedShelf");

const ShowBooksList = (books, search) => {
  uncompletedShelf.innerHTML = "";
  completedShelf.innerHTML = "";

  const completedBooks = books.filter(({ isComplete }) => isComplete);
  const uncompletedBooks = books.filter(({ isComplete }) => !isComplete);

  const searchResultCompletedBooks = books.filter(
    (book) =>
      (book.year.includes(search) && book.isComplete) ||
      (book.title.includes(search) && book.isComplete) ||
      (book.author.includes(search) && book.isComplete)
  );

  const searchResultUncompletedBooks = books.filter(
    (book) =>
      (book.year.includes(search) && !book.isComplete) ||
      (book.title.includes(search) && !book.isComplete) ||
      (book.author.includes(search) && !book.isComplete)
  );

  if (search) {
    completedShelf.innerHTML =
      searchResultCompletedBooks.length > 0
        ? searchResultCompletedBooks
            .map((book) => {
              return BookCard({
                title: book.title,
                author: book.author,
                year: book.year,
                isComplete: book.isComplete,
                id: book.id,
              });
            })
            .join("")
        : "<p>No result found</p>";

    uncompletedShelf.innerHTML =
      searchResultUncompletedBooks.length > 0
        ? searchResultUncompletedBooks
            .map((book) => {
              return BookCard({
                title: book.title,
                author: book.author,
                year: book.year,
                isComplete: book.isComplete,
                id: book.id,
              });
            })
            .join("")
        : "<p>No result found</p>";
  } else {
    completedShelf.innerHTML =
      completedBooks.length > 0
        ? completedBooks
            .map((book) => {
              return BookCard({
                title: book.title,
                author: book.author,
                year: book.year,
                isComplete: book.isComplete,
                id: book.id,
              });
            })
            .join("")
        : "<p>No books yet</p>";

    uncompletedShelf.innerHTML =
      uncompletedBooks.length > 0
        ? uncompletedBooks
            .map((book) => {
              return BookCard({
                title: book.title,
                author: book.author,
                year: book.year,
                isComplete: book.isComplete,
                id: book.id,
              });
            })
            .join("")
        : "<p>No books yet</p>";
  }

  const deleteBtn = document.querySelectorAll("#delete-btn");

  deleteBtn.forEach((btn) => {
    btn.onclick = () => {
      const index = books.findIndex(
        (book) => book.id == btn.parentElement.getAttribute("id")
      );

      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
      ShowBooksList(books);
    };
  });

  const completedBtn = document.querySelectorAll("#completed-btn");

  completedBtn.forEach((btn) => {
    btn.onclick = () => {
      const index = books.findIndex(
        (book) => book.id == btn.parentElement.getAttribute("id")
      );

      books[index].isComplete = !books[index].isComplete;
      localStorage.setItem("books", JSON.stringify(books));
      ShowBooksList(books);
    };
  });
};

export default ShowBooksList;
