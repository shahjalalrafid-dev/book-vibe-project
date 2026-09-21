'use client'

import { BooksContext } from '@/context/BooksContext'
import React, { useContext } from 'react'

const ListedBooks = () => {

    const {readBooks, wishBooks} = useContext(BooksContext);
    console.log(readBooks);

  return (
    <div>Listed Books</div>
  )
}

export default ListedBooks