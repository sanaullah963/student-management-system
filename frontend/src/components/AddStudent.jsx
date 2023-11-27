"use client";
import React, { useState } from "react";
import Container from "./Container";
import axios from "axios";
import PageHeadding from "./PageHeadding";
import toast, { Toaster } from "react-hot-toast";

// main function
function AddStudent() {
  // useState
  const [name, setName] = useState("");
  const [roll, setRoll] = useState();
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [number, setNumber] = useState();
  const [secendNuber, setsecendNumber] = useState();
  const [guardian, setGuardian] = useState();
  const [section, setSection] = useState("");
  const [technology, setTechnology] = useState("");
  const [image, setImage] = useState("");

  const submitHandel = (e) => {
    e.preventDefault();
    // without Image
    if (
      !name |
      !roll |
      !fName |
      !mName |
      !address |
      !dateOfBirth |
      !number |
      !secendNuber |
      !guardian |
      !technology |
      !section
    ) {
      toast.error('All Fild Are requier')
    } else {
      // input data object
      const stdData = {
        name,
        roll,
        technology,
        fName,
        mName,
        address,
        dateOfBirth,
        number,
        secendNuber,
        guardian,
        section,
      };
      axios
        .post("http://localhost:8000/student", stdData)
        .then((res) => {
          toast.success(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <main>
      <Container>
        <PageHeadding headding={"add new student"} />
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:gap-x-20 md:mt-24 mb-24 md:mx-24">
          {/* name */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Name :</label>
            <input
              type="text"
              onInput={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* roll */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Roll :</label>
            <input
              type="Number"
              onInput={(e) => setRoll(e.target.value)}
              placeholder="Roll"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* technology */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Technology Name :</label>
            <select
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
              onInput={(e) => setTechnology(e.target.value)}
            >
              <option>Select A technology</option>
              <option value="computer">Computer Technology</option>
              <option value="electrical">Electrical Technology</option>
              <option value="electronics">Electronics Technology</option>
              <option value="civil">Civil Technology</option>
              <option value="power">Power Technology</option>
              <option value="mechanical">Mechanical Technology</option>
              <option value="electro-Medical">
                Electro-Medical Technology
              </option>
            </select>
          </div>
          {/* father name */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Father Name :</label>
            <input
              type="text"
              onInput={(e) => setFName(e.target.value)}
              placeholder="Father Name"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* mother name */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Mother Name :</label>
            <input
              type="text"
              onInput={(e) => setMName(e.target.value)}
              placeholder="Mother Name"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>

          {/* address */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Address :</label>
            <input
              type="text"
              onInput={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* date of birth */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Date Of Birth :</label>
            <input
              type="date"
              onInput={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date Of Birth"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>

          {/* number */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Number :</label>
            <input
              type="Number"
              onInput={(e) => setNumber(e.target.value)}
              placeholder="Number"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* secend number */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Secend Number :</label>
            <input
              type="Number"
              onInput={(e) => setsecendNumber(e.target.value)}
              placeholder="Secend Number"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* guardian number */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Guardian Number :</label>
            <input
              type="Number"
              onInput={(e) => setGuardian(e.target.value)}
              placeholder="Guardian Number"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div>
          {/* section */}
          <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Section :</label>
            <select
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
              onInput={(e) => setSection(e.target.value)}
            >
              <option>Select Your Section</option>
              <option value="15-16">15-16</option>
              <option value="16-17">16-17</option>
              <option value="17-18">17-18</option>
              <option value="18-19">18-19</option>
              <option value="19-20">19-20</option>
              <option value="20-21">20-21</option>
              <option value="21-22">21-22</option>
              <option value="22-23">22-23</option>
            </select>
          </div>
          {/* image section */}
          {/* <div className="flex flex-col gap-y-1">
            <label className="font-semibold text-lg">Image :</label>
            <input
              type="file"
              onInput={(e) => setImage(e.target.value)}
              placeholder="Image"
              className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
            />
          </div> */}

          {/* handel button */}
          <div className="">
            <button
              onClick={submitHandel}
              type="sublit"
              className="bg-sky-500 px-5 py-3 rounded-md text-white text-lg"
            >
              Add Student
            </button>
          </div>
        </form>
      </Container>
      <Toaster/>
    </main>
  );
}

export default AddStudent;
