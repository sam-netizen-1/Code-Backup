import React, { useState, useEffect, useRef } from "react";
import debounce from "lodash/debounce";
import "./App.scss";
import BookCard from "./components/BookCard";
import Pagination from "./components/Pagination";

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  coverId: string;
  status: "Read" | "Unread";
}

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBooks = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/people/mekBot/books/already-read.json?limit=20&page=${page}`
      );
      const data = await response.json();
      if (
        Array.isArray(data.reading_log_entries) &&
        data.reading_log_entries.length > 0
      ) {
        const fetchedBooks: Book[] = data.reading_log_entries.map(
          (entry: any) => ({
            title: entry?.work?.title,
            author: entry?.work?.author_names[0],
            publishedYear: entry?.work?.first_publish_year,
            coverId: entry?.work?.cover_id,
            status: "Unread",
          })
        );
        setBooks(fetchedBooks);
        setTotalPages(Math.ceil(data.num_found / 20));
      } else {
        console.error("No reading log entries found in the data:", data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchBooks = async (query: string, page: number) => {
    if (query.trim() === "") return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&fields=*,availability&limit=20&page=${page}`
      );
      const data = await response.json();
      const searchResults: Book[] = data.docs.map((doc: any) => ({
        title: doc?.title,
        author: doc?.author_name?.pop(),
        publishedYear: doc?.first_publish_year,
        coverId: doc?.cover_i,
        status: "Unread",
      }));
      setSearchResults(searchResults);
      setTotalPages(Math.ceil(data.num_found / 20));
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };
  const debouncedSearch = useRef(debounce(searchBooks, 500)).current;
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1);
    debouncedSearch(query, 1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (searchQuery) {
      searchBooks(searchQuery, pageNumber);
    } else {
      fetchBooks(pageNumber);
    }
  };
  const toggleStatus = (index: number, isSearchResult: boolean) => {
    if (isSearchResult) {
      const updatedSearchResults = [...searchResults];
      updatedSearchResults[index].status =
        updatedSearchResults[index].status === "Read" ? "Unread" : "Read";
      setSearchResults(updatedSearchResults);
    } else {
      const updatedBooks = [...books];
      updatedBooks[index].status =
        updatedBooks[index].status === "Read" ? "Unread" : "Read";
      setBooks(updatedBooks);
    }
  };
  useEffect(() => {
    fetchBooks(currentPage);
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Book Library</h1>
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </header>
      <main>
        {loading && <div className="loader">Loading...</div>}
        {!loading && (
          <>
            {searchQuery ? (
              <div className="book-list">
                {searchResults.map((book, index) => (
                  <BookCard
                    key={index}
                    book={book}
                    index={index}
                    toggleStatus={toggleStatus}
                  />
                ))}
              </div>
            ) : (
              <div className="book-list">
                {books.map((book, index) => (
                  <BookCard
                    key={index}
                    book={book}
                    index={index}
                    toggleStatus={toggleStatus}
                  />
                ))}
              </div>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
