import React from 'react'
import BookShow from './BookShow'

function BookList({books, deleteBookById, handleBookEdit}) {
  return (
    <div className='book-list'>
        { 
            books?.map(book => (
                <BookShow key={book?.id} book={book} deleteBookById={deleteBookById} handleBookEdit={handleBookEdit}/>
            ))
        }
    </div>
  )
}

export default BookList