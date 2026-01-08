function getRandomBook() {
  return books[Math.floor(Math.random() * books.length)];
}

function displayBook(book) {
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('book-author').textContent = `by ${book.author}`;
  document.getElementById('book-description').textContent = book.description;
}

// Display initial recommendation
displayBook(getRandomBook());

// Add click handler for button
document.getElementById('get-recommendation').addEventListener('click', () => {
  displayBook(getRandomBook());
});
