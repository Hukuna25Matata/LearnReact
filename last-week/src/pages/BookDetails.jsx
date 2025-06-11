import { useParams } from "react-router-dom";
import books from "../assets/books.json";
import { useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const [favorite, setFavorite] = useState(false);

  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.summary}</p>
      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "Remove Favorite" : "Mark as Favorite"}
      </button>
    </div>
  );
}

export default BookDetails;
