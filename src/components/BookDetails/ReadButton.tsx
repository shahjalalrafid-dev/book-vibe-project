'use client'

import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/Books.type';
import React, { useContext } from 'react'


const ReadButton = ({book}: {book:Ibook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
        alert(`you hav read ${book.bookName}`);
    }

  return (
     <button className="btn border-0 bg-indigo-600 px-8 text-white hover:bg-indigo-700" onClick={() => handleReadBook()}>
                  Read
                </button>
  )
}

export default ReadButton