"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import PageHeadding from "./PageHeadding";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import Search, { searchData } from "./Search";

// main function
function AllStudent() {
  //----------get mathod
  const [studentData, setstudentdata] = useState([]);
  axios
    .get("http://localhost:8000/students")
    .then((res) => setstudentdata(res.data));

  // -------search button handel
  const [seachInput, setSearchInput] = useState("");
  let dataArray = []
  const [searshResult,setSearshResult] =useState([])
  const totalSudent = studentData.length

  const searchHandel = (e) => {
    e.preventDefault();
    if (seachInput == "") {
      toast.error('Search box is empty')
    } else {
            studentData.map((i) => {
              if (i.roll == seachInput || i.name == seachInput || i.section == seachInput) {
                dataArray.push(i)
              } else {
                // console.log('data not found');
              }
            });
            setSearshResult(dataArray)    
    }
    setSearchInput("");
  };
  return (
    <Container>
      <PageHeadding headding={"all Student list"} />
      <div className="w-full  mb-10">
        {/*-----------search section */}
        <form className="my-5 flex justify-center items-center">
          {/* input button */}
          <input
            type="text"
            value={seachInput}
            placeholder="Search (Roll)"
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
        <div className="">
          <h2 className="bg-purple-600 font-semibold inline-block px-3 py-2 text-white rounded-md">Total student : {totalSudent}</h2>
        </div>
        <div className="flex bg-slate-100 uppercase ">
          <table className="w-full">
            {/* teble headding */}
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-x-gray-500">si</th>
                <th className="border border-x-gray-500">roll</th>
                <th className="border border-x-gray-500">name</th>
                <th className="border border-x-gray-500">section</th>
                <th className="border border-x-gray-500">action</th>
              </tr>
            </thead>
            {/* table element */}
            <tbody className="text-center ">
              {
                  searshResult == '' ? (
                    // all time shit
                    studentData.map((data, index) => (
                    <tr
                      key={data._id}
                      className={` text-center h-14 ${index % 2 && "bg-gray-300"} `}
                    >
                      <td className="border border-x-gray-500">{index + 1}</td>
                      <td className="border border-x-gray-500">{data.roll}</td>
                      <td className="border border-x-gray-500">{data.name}</td>
                      <td className="border border-x-gray-500">{data.section}</td>
                      <td className="border border-x-gray-500 text-center flex gap-x-4 justify-center">
                        <button className="px-2 py-1 bg-red-600 rounded-md text-white">
                          delet
                        </button>
                        <button className="px-2 py-1 bg-green-600 rounded-md text-white">
                          edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  // search resalt shit
                  searshResult.map((data, index) => (
                    <tr
                      key={data._id}
                      className={` text-center h-14 ${index % 2 && "bg-gray-300"} `}
                    >
                      <td className="border border-x-gray-500">{index + 1}</td>
                      <td className="border border-x-gray-500">{data.roll}</td>
                      <td className="border border-x-gray-500">{data.name}</td>
                      <td className="border border-x-gray-500">{data.section}</td>
                      <td className="border border-x-gray-500 text-center flex gap-x-4 justify-center">
                        <button className="px-2 py-1 bg-red-600 rounded-md text-white">
                          delet
                        </button>
                        <button className="px-2 py-1 bg-green-600 rounded-md text-white">
                          edit
                        </button>
                      </td>
                    </tr>
                  ))
                )
              }
              
            </tbody>
          </table>
        </div>
      </div>
      <Toaster/>
    </Container>
  );
}

export default AllStudent;
