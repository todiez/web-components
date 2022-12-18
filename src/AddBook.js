import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBook = () => {
  const [isbn, setISBN] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDesc] = useState("");
  const [website, setWebsite] = useState("");

  const [isPending, setIsPending] = useState(false);
  const history  = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { isbn, title, subtitle, author, published, publisher, pages, description, website };
    setIsPending(true);

    fetch('http://localhost:8000/books', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBook)
    }).then(() => {
      console.log('new book added');
      setIsPending(false);
      history.push('/');
    })

  }

  return (
    <div className="addbook">
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
      <label>ISBN No</label>
        <input
          type="number"
          required
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
        />
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
         <label>Published</label>
        <input
          type="text"
          required
          value={published}
          onChange={(e) => setPublished(e.target.value)}
        />
        <label>Publisher</label>
        <input
          type="text"
          required
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label>Pages</label>
        <input
          type="number"
          required
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
        />
        <label>Description</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>Website</label>
        <input
          type="text"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      
      {!isPending && <button>Add Book</button> }
      {isPending && <button disabled>Adding...</button> }
      {/* button fires of the onSubmit from form because it is inside form tags */}
      </form>
    </div>
  );
};

export default AddBook;
