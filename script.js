function getRandomBook() {
  return books[Math.floor(Math.random() * books.length)];
}

function displayBook(book) {
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('book-author').textContent = `by ${book.authors.join(', ')}`;
  document.getElementById('book-isbn').textContent = `ISBN: ${book.isbn}`;
  document.getElementById('book-description').textContent = book.description;
  document.getElementById('book-username').textContent = `Recommended by @${book.username}`;
}

// Display initial recommendation
displayBook(getRandomBook());

// Add click handler for button
document.getElementById('get-recommendation').addEventListener('click', () => {
  displayBook(getRandomBook());
});
