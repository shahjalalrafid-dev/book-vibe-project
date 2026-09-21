import { Ibook } from '@/types/Books.type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IBookCard {
    book: Ibook
}

const BookCard = ({book}: IBookCard) => {
    return (
        <div
            className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >

            {/* Image */}
            <div className="relative h-80 overflow-hidden bg-gray-100">

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-indigo-600 shadow">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                    <span className="text-yellow-400">★</span>
                    {book.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    by{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Review */}
                <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book Information */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">

                    <div>
                        <p className="text-xs text-gray-400">Pages</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Published</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Publisher</p>
                        <p className="mt-1 font-semibold text-gray-800 line-clamp-1">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">Rating</p>
                        <p className="mt-1 font-semibold text-gray-800">
                            {book.rating}/5
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link href={`/books/${book.bookId}`}>
                
                <button className="cursor-pointer mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
                    View Details
                </button>
                </Link>
                
            </div>
        </div>
    )
}

export default BookCard