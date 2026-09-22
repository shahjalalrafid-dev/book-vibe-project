import { Ibook } from "@/types/Books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IReadBookCardProps {
  book: Ibook;
}

const ListedBooksCard = ({ book }: IReadBookCardProps) => {
  return (
    <div className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-44 sm:w-32">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Read Badge */}
        <div className="absolute bottom-2 left-2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow">
          ✓ Read
        </div>
      </div>

      {/* Book Content */}
      <div className="flex flex-1 flex-col">

        {/* Top Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
              {book.bookName}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              by{" "}
              <span className="font-medium text-gray-700">
                {book.author}
              </span>
            </p>
          </div>

          {/* Rating */}
          <div className="flex w-fit items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-semibold text-yellow-700">
            <span>★</span>
            {book.rating}
          </div>

        </div>

        {/* Review */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Book Info */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
            <span>
              📖 {book.totalPages} pages
            </span>

            <span>
              📅 {book.yearOfPublishing}
            </span>

            <span>
              🏷️ {book.category}
            </span>
          </div>

          {/* View Details */}
          <Link
            href={`/books/${book.bookId}`}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
          >
            View Details
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;