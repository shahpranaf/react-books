import React, { useContext } from 'react'
import BookShow from './BookShow'
import { BooksContext } from '../context/books'

function BookList() {

    const {books} = useContext(BooksContext);
  return (
    <div className='book-list'>
       
        { 
            books?.map(book => (
                <BookShow key={book?.id} book={book} />
            ))
        }
    </div>
  )
}

export default BookList