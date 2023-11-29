"use client";
import React, { useState } from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import Modal from "./Modal";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  axios
    .get("https://student-management-system-backend-eight.vercel.app/teachers")
    .then((res) => setTeachers(res.data));

  // -------search button handel
  const [seachInput, setSearchInput] = useState("");
  let dataArray = [];
  const [searshResult, setSearshResult] = useState([]);
  const totalTeacher = teachers.length;
  // button handel
  const searchHandel = (e) => {
    e.preventDefault();
    if (seachInput == "") {
      toast.error("Search box is empty");
    } else {
      teachers.map((i) => {
        if (
          i.name == seachInput ||
          i.technology == seachInput ||
          i.designation == seachInput
        ) {
          dataArray.push(i);
        } else {
          // console.log('data not found');
        }
      });
      setSearshResult(dataArray);
    }
    setSearchInput("");
  };
  //----------modal
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <Container>
      {/* -----modal data */}
      {showModal && <Modal closeModal={closeModal} modalData={modalData}   DBcollection={'teacher'} />}
      <div className="w-full">
        <PageHeadding headding={"all teacher"} />
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
        {/* -----total item */}
        <div className="">
          <h2 className="bg-purple-600 font-semibold inline-block px-3 py-2 text-white rounded-md">
            Total student : {totalTeacher}
          </h2>
        </div>
        <table className="w-full capitalize bg-gray-100">
          <thead className="">
            <tr className="bg-gray-800 text-white">
              <th className="border border-x-gray-400">view</th>
              <th className="border border-x-gray-400">si</th>
              <th className="border border-x-gray-400">name</th>
              <th className="border border-x-gray-400">depertment</th>
              <th className="border border-x-gray-400">position</th>
              <th className="border border-x-gray-400">details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* -----conditional rendaring */}
            {searshResult == ""
            // all time shit
              ? teachers.map((data, index) => (
                  <tr
                    key={data._id}
                    className={` h-14 ${index % 2 && "bg-gray-300"} `}
                  >
                    <td className="border border-x-gray-500">
                      <button onClick={() => (
                            setShowModal(true), setModalData(data)
                          )}>
                        <VscPreview />
                      </button>
                    </td>
                    <td className="border border-x-gray-400">{index + 1}</td>
                    <td className="border border-x-gray-400">{data.name}</td>
                    <td className="border border-x-gray-400">
                      {data.technology}
                    </td>
                    <td className="border border-x-gray-400">
                      {data.designation}
                    </td>
                    <td className="border border-x-gray-400">
                      <button
                        className="px-2 py-1 bg-red-600 rounded-md text-white"
                        onClick={() =>
                          axios
                            .post("https://student-management-system-backend-eight.vercel.app/delete", {
                              id: data._id,
                              collection: "teacher",
                            })
                            .then((res) => toast.success(res.data))
                            .catch((error) => console.log(error))
                        }
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))
                // search resalt shit
              : searshResult.map((data, index) => (
                  <tr
                    key={data._id}
                    className={` h-14 ${index % 2 && "bg-gray-300"} `}
                  >
                    <td className="border border-x-gray-500">
                      <button onClick={() => (
                            setShowModal(true), setModalData(data)
                          )}>
                        <VscPreview />
                      </button>
                    </td>
                    <td className="border border-x-gray-400">{index + 1}</td>
                    <td className="border border-x-gray-400">{data.name}</td>
                    <td className="border border-x-gray-400">
                      {data.technology}
                    </td>
                    <td className="border border-x-gray-400">
                      {data.designation}
                    </td>
                    <td className="border border-x-gray-400">
                      <button
                        className="px-2 py-1 bg-red-600 rounded-md text-white"
                        onClick={() =>
                          axios
                            .post("https://student-management-system-backend-eight.vercel.app/delete", {
                              id: data._id,
                              collection: "teacher",
                            })
                            .then((res) => toast.success(res.data))
                            .catch((error) => console.log(error))
                        }
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </Container>
  );
}

export default Teacher;
