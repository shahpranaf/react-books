import React, { useState } from 'react'

function BookEdit( {book, onBookEdit}) {
    const [title, setTitle] = useState(book?.title);


    const handleSubmit = (e) => {
        e.preventDefault();
        onBookEdit(book.id, title);
    }

    return (
        <div className='book-edit'>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Enter Book name' value={title} />
                <button className='button is-primary' type="submit"> Save </button>
            </form>
        </div>
    )
}

export default BookEdit