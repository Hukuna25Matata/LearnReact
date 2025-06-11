import { useState } from "react";
import books from "../assets/books.json";
import { Link } from "react-router-dom";

function BookList() {
  const [query, setQuery] = useState("");

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Book List</h2>
      <input
        type="text"
        placeholder="Search books"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
