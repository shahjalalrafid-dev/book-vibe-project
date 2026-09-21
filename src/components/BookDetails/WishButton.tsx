'use client'

import { BooksContext } from '@/context/BooksContext'
import { Ibook } from '@/types/Books.type'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const WishButton = ({book} : {book: Ibook}) => {

    const {wishBooks, setWishBooks} = useContext(BooksContext);

    const handleWishButton = () => {
        setWishBooks([...wishBooks, book]);
        toast.success(`you have added ${book.bookName} in your wishlist`);
    }


  return (
    <button className="btn btn-outline px-8" onClick={() => handleWishButton()}>
                  Wishlist
                </button>
  )
}

export default WishButton