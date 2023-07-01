import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

const BASE_URL = `${ process.env.REACT_APP_BASE_URL }`;
const URL = BASE_URL+'/books';

function BooksProvider ({ children }) {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get(URL);
        setBooks(response?.data)
    }

    const addBook = async (title) => {
        if (!title || title.trim() === "") return;

        const response = await axios.post(URL, {
            title
        });

        setBooks([...books, response?.data]);
        // setBooks([...books, {
        //   title,
        //   id: Math.round(Math.random() * 9999) 
        // }]);
    }

    const editBook = async (id, title) => {
        //  const udpatedBooks = books.map(book => {
        //   if(book.id === id) {
        //     return {...book, title: newTitle}
        //   } 
        //   return book;
        //  })
        const response = await axios.put(URL + '/' + id, {
            title
        });

        getBooks();

    }

    const deleteBookById = async (id) => {
        if (!id) return;

        // const udpatedBooks = books.filter(book => book.id !== id);

        const response = await axios.delete(URL + '/' + id);
        // setBooks(udpatedBooks);
        getBooks();
    };

    return (
    <BooksContext.Provider 
    value={{
            books,
            getBooks,
            addBook,
            editBook,
            deleteBookById
        }}
    >
        {children}
    </BooksContext.Provider>
    )
}

export {BooksProvider, BooksContext}