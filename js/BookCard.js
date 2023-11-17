const BookCard = ({ title, author, year, isComplete, id }) => {
  return `
    <li id="${id}">
      <h3>${title}</h3>
      <p>Penulis: ${author}</p>
      <p>Tahun: ${year}</p>

      <button id="completed-btn" type="button">
        ${isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
      </button>
      <button id="delete-btn" type="button">Hapus buku</button>
    </li>
  `;
};

export default BookCard;
