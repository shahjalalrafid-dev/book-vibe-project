'use client'

import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/Books.type';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';


const ReadButton = ({book}: {book:Ibook}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        setReadBooks([...readBooks, book]);
        toast.success(`you have read ${book.bookName}`);
    }

  return (
     <button className="btn border-0 bg-indigo-600 px-8 text-white hover:bg-indigo-700" onClick={() => handleReadBook()}>
                  Read
                </button>
  )
}

export default ReadButton