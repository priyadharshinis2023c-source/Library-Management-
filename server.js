const express = require("express");
const app = express();

const PORT = 3000;

// Sample data
let books = [
  { id: 1, name: "Data Structures", status: "Available" },
  { id: 2, name: "Operating Systems", status: "Issued" }
];

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Online Library Monitoring System</h1>");
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add new book
app.get("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: "New Book " + books.length,
    status: "Available"
  };
  books.push(newBook);
  res.json(newBook);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});