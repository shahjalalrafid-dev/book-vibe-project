import ReadButton from "@/components/BookDetails/ReadButton";
import WishButton from "@/components/BookDetails/WishButton";
import { Ibook } from "@/types/Books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: Ibook) => book.bookId === Number(id)
  ) as Ibook;

  return (
    <main className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ================= IMAGE ================= */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8 md:p-12 flex items-center justify-center">

              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>

            {/* ================= DETAILS ================= */}
            <div className="lg:col-span-3 p-6 md:p-10 lg:p-14">

              {/* Category + Rating */}
              <div className="flex flex-wrap items-center gap-3 mb-5">

                <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                  {book.category}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                  ⭐ {book.rating}
                </span>

              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-lg text-slate-500">
                Written by{" "}
                <span className="font-semibold text-indigo-600">
                  {book.author}
                </span>
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-200"></div>

              {/* Review */}
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900">
                  About this book
                </h2>

                <p className="text-base leading-8 text-slate-600">
                  {book.review}
                </p>
              </div>

              {/* Book Information */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-400">
                    Pages
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {book.totalPages}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-400">
                    Published
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {book.yearOfPublishing}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-400">
                    Publisher
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800 line-clamp-1">
                    {book.publisher}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-400">
                    Rating
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    {book.rating}/5
                  </p>
                </div>

              </div>

              {/* Tags */}
              <div className="mt-8">

                <h3 className="mb-3 font-semibold text-slate-900">
                  Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">

               <ReadButton book = {book}></ReadButton>

                <WishButton book = {book} ></WishButton>

              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default BookDetailsPage;