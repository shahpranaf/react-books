import React, { useContext, useEffect, useState } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import axios from 'axios';
import { BooksContext } from './context/books';

const BASE_URL = 'http://localhost:3001/books';

function App() {
  const { getBooks } = useContext(BooksContext);
 
  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App