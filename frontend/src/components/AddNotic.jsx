"use client";
import React, { useState } from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
// main function
export default function AddNotic() {
  // useState
  const [description, setDescription] = useState("");
  const [headline, setHeadline] = useState("");
  //----------handel button
  const submitHandel = (e) => {
    e.preventDefault();
    // get date
    const date = new Date(); 
    const fullDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    if (!description | !headline) {
      toast.error("All Fild Are requier");
    } else {
      // input data object
      const NoticeData = {
        description,
        headline,
        fullDate,
      };
      axios
        .post("https://student-management-system-backend-eight.vercel.app/notice", NoticeData)
        .then((res) => {
          toast.success(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setHeadline("");
    setDescription("");
  };

  return (
    <Container>
      {/* form section */}
      <form className="max-w-[450px] bg-gray-100 px-5 pb-14 grid grid-cols-1 gap-y-4 md:mt-24 mb-24 mt-5 mx-auto rounded-md">
        <PageHeadding headding={"add notic"} />
        {/* <button onClick={time}>click</button> */}
        {/* headline */}
        <div>
          <label className="font-semibold text-lg capitalize">
            notice headline :
          </label>
          <input
            type="text"
            placeholder="Notice Headline"
            onInput={(e) => setHeadline(e.target.value)}
            className="w-full border-2 border-gray-400 rounded-md p-2 focus:outline-sky-400 mt-2"
            value={headline}
          ></input>
        </div>
        <div>
          <label className="font-semibold text-lg capitalize">
            notice description :
          </label>
          <textarea
            placeholder="Type your notice heare"
            onInput={(e) => setDescription(e.target.value)}
            className="h-20 w-full border-2 border-gray-400 rounded-md p-2 focus:outline-sky-400 mt-2"
            value={description}
          ></textarea>
        </div>
        {/* handel button */}
        <div className="">
          <button
            type="sublit"
            className="bg-sky-500 px-5 py-3 rounded-md text-white text-lg"
            onClick={submitHandel}
          >
            Publidh
          </button>
        </div>
      </form>
      <Toaster />
    </Container>
  );
}
