'use client'

import BookCard from '@/components/shared/BookCard';
import { BooksContext } from '@/context/BooksContext'
import React, { useContext } from 'react'

const ListedBooks = () => {

    const { readBooks, wishBooks } = useContext(BooksContext);
    console.log(readBooks, wishBooks);

    return (
        <div className='container mx-auto py-15'>
            <h2 className='my-7 font-bold text-center bg-amber-200 py-5'>Listed Books</h2>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {
                        readBooks.map((book, index:number) => {
                            return <BookCard key={index} book={book} />
                        })
                    }


                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="WishList Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                
            </div>



        </div>
    )
}

export default ListedBooks