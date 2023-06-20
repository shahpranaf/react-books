import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit';
import { BooksContext } from '../context/books';

function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const {editBook, deleteBookById} = useContext(BooksContext);


    const toggleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const onBookEdit = (id, title) => {
        editBook(id, title);
        toggleShowEdit();
    }

    let content = <h3>{book?.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onBookEdit={onBookEdit} />
    }


    return (
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book?.id}/200/200`} alt="book" />

            {content}
            <div className='actions'>
                <button className='edit' onClick={toggleShowEdit}>Edit</button>
                <button className='delete' onClick={() => deleteBookById(book?.id)}>X</button>
            </div>
        </div>
    )
}

export default BookShow