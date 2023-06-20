import React, { useContext, useState } from 'react'
import { BooksContext } from '../context/books';

function BookCreate() {
    const [book, setBook] = useState("");
    const { addBook } = useContext(BooksContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(book);
        setBook("")
    }

    return (
        <div className='book-create'> 
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" onChange={(e) => setBook(e.target.value)} placeholder='Enter Book name' value={book} />
                <button className='button'> Create </button>
            </form>
        </div>
    )
}

export default BookCreate