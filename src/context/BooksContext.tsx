'use client';

import { Ibook } from '@/types/Books.type';
import React, { useState } from 'react'
import { createContext } from 'react'

interface IBookContext {
  readBooks: Ibook[];
  setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>
  wishBooks: Ibook[];
  setWishBooks: React.Dispatch<React.SetStateAction<Ibook[]>>
}

export const BooksContext = createContext<IBookContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishBooks: [],
  setWishBooks: () => {}

  
});

const BooksProvider = ({children}: {children: React.ReactNode}) => {

    const [readBooks, setReadBooks] = useState<Ibook[]>([]);
    const [wishBooks, setWishBooks] = useState<Ibook[]>([]);
    const shareData = {
        readBooks,
        setReadBooks,
        wishBooks,
        setWishBooks
    }

  return (
    <BooksContext.Provider value = {shareData} >{children}</BooksContext.Provider>
  )
}

export default BooksProvider