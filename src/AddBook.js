import { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [desc, setDesc] = useState("");
  const [isbn, setISBN] = useState("");

  return (
    <div className="addbook">
      <h2>Add a new Book</h2>
      <form>
        <label>Book Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Book Subtitle</label>
        <input
          type="text"
          required
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Publisher</label>
        <input
          type="text"
          required
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>ISBN No</label>
        <input
          type="text"
          required
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
        />      </form>
    </div>
  );
};

export default AddBook;
