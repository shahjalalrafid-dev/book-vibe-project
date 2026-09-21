'use client'

import { BooksContext } from '@/context/BooksContext'
import { Ibook } from '@/types/Books.type'
import React, { useContext, useState } from 'react'

const WishButton = ({book} : {book: Ibook}) => {

    const {wishBooks, setWishBooks} = useContext(BooksContext);

    const handleWishButton = () => {
        setWishBooks([...wishBooks, book]);
    }


  return (
    <button className="btn btn-outline px-8" onClick={() => handleWishButton()}>
                  Wishlist
                </button>
  )
}

export default WishButton