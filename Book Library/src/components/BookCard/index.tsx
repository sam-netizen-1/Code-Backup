import React from "react";

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  coverId: string;
  status: "Read" | "Unread";
}

interface BookCardProps {
  book: Book;
  index: number;
  toggleStatus: (index: number, isSearchResult: boolean) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, index, toggleStatus }) => {
  return (
    <div className="book-card">
      {book.coverId ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
          alt="Book cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = "none";
            const noCoverImageDiv = document.createElement("div");
            noCoverImageDiv.className = "no-cover-image";
            noCoverImageDiv.innerText = "No cover image found";
            const parentDiv = e.currentTarget.parentNode;
            parentDiv?.insertBefore(noCoverImageDiv, parentDiv.firstChild);
          }}
        />
      ) : (
        <div className="no-cover-image">No cover image found</div>
      )}
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.publishedYear}</p>
        <button
          className={book.status === "Read" ? "read-button" : "unread-button"}
          onClick={() => toggleStatus(index, true)}
        >
          {book.status === "Read" ? "Read" : "Unread"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
