import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import './index.css';
import { BooksProvider } from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </React.StrictMode>
)