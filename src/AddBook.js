const AddBook = () => {
  return (
    <div className="addbook">
      <h2>Add a new Book</h2>
      <form>
        <label>Book Title</label>
        <input type="text" required />
        <label>Book Subtitle</label>
        <input type="text" required />
        <label>Author</label>
        <input type="text" required />
        <label>Publisher</label>
        <input type="text" required />
        <label>Description</label>
        <input type="text" required />
        <label>ISBN No</label>
        <input type="text" required />
      </form>
    </div>
  );
};

export default AddBook;
