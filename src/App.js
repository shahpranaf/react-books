import React, { useEffect, useState } from 'react'
import BookList from './components/BookList'
import BookCreate from './components/BookCreate'
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/books';

function App() {
  const [books, setBooks] = useState([]);

  const getbooks = async () => {
    const response = await axios.get(BASE_URL);
    setBooks(response?.data)
  }

  useEffect(() => {
    getbooks();
  }, [])

  const handleBookSubmit = async (title) => {
    if (!title || title.trim() === "") return;

    const response = await axios.post(BASE_URL, {
      title
    });

    setBooks([...books, response?.data]);
    // setBooks([...books, {
    //   title,
    //   id: Math.round(Math.random() * 9999) 
    // }]);
  }

  const handleBookEdit = async (id, title) => {
    //  const udpatedBooks = books.map(book => {
    //   if(book.id === id) {
    //     return {...book, title: newTitle}
    //   } 
    //   return book;
    //  })

    const response = await axios.put(BASE_URL + '/' + id, {
      title
    });

    getbooks();

  }

  const deleteBookById = async (id) => {
    if (!id) return;

    // const udpatedBooks = books.filter(book => book.id !== id);

    const response = await axios.delete(BASE_URL + '/' + id);
    // setBooks(udpatedBooks);
    getbooks();
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} deleteBookById={deleteBookById} handleBookEdit={handleBookEdit} />
      <BookCreate handleBookSubmit={handleBookSubmit} />
    </div>
  )
}

export default App