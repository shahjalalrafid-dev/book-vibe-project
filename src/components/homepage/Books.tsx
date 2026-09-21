
import React from "react";
import BookCard from "../shared/BookCard";
import { Ibook } from "@/types/Books.type";

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto px-4 py-20">

            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">
                    Discover Your Next Read
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Featured Books
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-500">
                    Explore our collection of timeless classics, thrilling adventures,
                    inspiring stories, and unforgettable characters.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {booksData.slice(0,7).map((book: Ibook, index:number) => (
                    <BookCard key={index} book = {book} />
                ))}
            </div>
        </section>
    );
};

export default Books;