document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookName = document.getElementById('book-name').value;
    const email = document.getElementById('email').value;
  });
  