"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const searchData = {}
function Search() {
  const [seachInput, setSearchInput] = useState("");
  // search button handel
  const searchHandel = (e) => {
    e.preventDefault();
    if(seachInput == ''){
      console.log('input fild is empty');
    }else{
      searchData.data = seachInput;
      console.log('data send successfull');
    }
 setSearchInput('')
  };
  return (
    <main className="">
      <form className="my-5 flex justify-center items-center">
        {/* input button */}
        <input
          type="text"
          value={seachInput}
          placeholder="Search"
          className="focus:outline-sky-500 border-2 border-gray-300 px-2 h-10 rounded-s-md"
          onInput={(e) => setSearchInput(e.target.value)}
        />
        {/* handel button */}
        <button
          className="h-10 bg-gray-800 w-10 text-white rounded-e-md cursor-pointer"
          onClick={searchHandel}
        >
          <FaSearch className="mx-auto my-auto" />
        </button>
      </form>
    </main>
  );
}

export default Search;

export {searchData}