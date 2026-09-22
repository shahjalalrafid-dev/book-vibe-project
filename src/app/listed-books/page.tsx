'use client'


import ListedBooksCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext'
import { Ibook } from '@/types/Books.type';
import React, { useContext, useState } from 'react'

const ListedBooks = () => {

    const { readBooks, wishBooks } = useContext(BooksContext);
    const [sortby, setSortBy] = useState<"rating" | "pages" | "year">("rating");
    const sortBooks = (books: Ibook[]) => {
        const sortedBooks = [...books];
        if(sortby === "rating"){
            sortedBooks.sort((a, b) => b.rating - a.rating)
        }else if (sortby === "pages"){
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages)
        }else {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;

    }
    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishBooks = sortBooks(wishBooks);
    

    return (
        <div className='container mx-auto py-15'>
            <h2 className='my-7 font-bold text-center bg-amber-200 py-5'>Listed Books</h2>

            <div className='text-center'>
                <select value={sortby} onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year") } defaultValue="Pick a Runtime" className="select select-success mb-5">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Published Year</option>
                </select>
            </div>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books ${readBooks.length}`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {
                        sortedReadBooks.length > 0 ?
                            sortedReadBooks.map((book: Ibook, index: number) => {
                                return <ListedBooksCard key={index} book={book} />
                            }) : <p className='text-center font-bold text-3xl'>No Read Books Found</p>
                    }


                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wish Books ${wishBooks.length}`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {
                        sortedWishBooks.length > 0 ?
                            sortedWishBooks.map((book: Ibook, index: number) => {
                                return <ListedBooksCard key={index} book={book} />
                            }) : <p className='text-center font-bold text-3xl'>No Wish Books Found</p>
                    }
                </div>


            </div>



        </div>
    )
}

export default ListedBooks