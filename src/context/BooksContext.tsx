'use client';

import React, { useState } from 'react'
import { createContext } from 'react'

export const BooksContext = createContext({});

const BooksProvider = ({children}: {children: React.ReactNode}) => {

    const [readBooks, setReadBooks] = useState([]);
    const [wishList, setWhishList] = useState([]);
    const shareData = {
        readBooks,
        setReadBooks,
        wishList,
        setWhishList
    }

  return (
    <BooksContext.Provider value = {shareData} >{children}</BooksContext.Provider>
  )
}

export default BooksProvider