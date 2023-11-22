"use client";
import React, { useState } from "react";
import PageHeadding from "./PageHeadding";
import Container from "./Container";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function AddTeacher() {
  // useState
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [secendNuber, setsecendNumber] = useState("");
  const [image, setImage] = useState("");
  // handel button
  const submitHandel = (e) => {
    e.preventDefault();
    // without Image
    if (
      !name |
      !technology |
      !designation |
      !address |
      !number |
      !secendNuber
    ) {
      toast.error('All Fild Are requier')
    } else {
      // input data object
      const teacherData = {
        name,
        technology,
        designation,
        address,
        number,
        secendNuber,
      };
      axios
        .post("http://localhost:8000/teacher", teacherData)
        .then((res) => {
          toast.success(res.data)
        })
        .catch((error) => {
          console.log(error);
        });

    }
  };
  return (
    <Container>
      <PageHeadding headding={"add a new teacher"} />
      {/* form dection */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:gap-x-20 md:mt-24 mb-24 mt-5 mx-8 md:mx-24">
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
            <option value="electro-Medical">Electro-Medical Technology</option>
          </select>
        </div>
        {/* designation */}
        <div className="flex flex-col gap-y-1">
          <label className="font-semibold text-lg">designation :</label>
          <select
            onInput={(e) => setDesignation(e.target.value)}
            className="border border-gray-400 rounded-md h-10 px-3 focus:outline-sky-400"
          >
            <option>Selct a designation</option>
            <option value="p">P</option>
            <option value="vp">VP</option>
            <option value="ci">CI</option>
            <option value="instructor">Instructor</option>
            <option value="seniorTeacher">Senior Teacher</option>
            <option value="teacher">Teacher</option>
          </select>
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
            type="sublit"
            className="bg-sky-500 px-5 py-3 rounded-md text-white text-lg"
            onClick={submitHandel}
          >
            Add New Teacher
          </button>
        </div>
      </form>
      <Toaster />
    </Container>
  );
}

export default AddTeacher;
