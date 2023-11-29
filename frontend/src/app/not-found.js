// 'use client'
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h2>Not Found</h2>
      <p>Your requested Url Not found</p>
      <div className="flex gap-x-4 mt-5">
        <Link
          href="/"
          className="bg-gray-300 py-2 px-3 hover:bg-gray-400 rounded-md float-left"
        >
          Return Home
        </Link>
        <button
          
          className="bg-gray-300 py-2 px-3 hover:bg-gray-400 rounded-md"
        >
          Back Previus Page
        </button>
      </div>
    </div>
  );
}
