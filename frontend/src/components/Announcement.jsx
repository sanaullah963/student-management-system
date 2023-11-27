"use client";
import React, { useState } from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
function Announcement() {
  const [show, setShow] = useState(true);
  const [notices, setNotices] = useState([]);
  // const [descriptionId,setDescriptionId]=useState('')
 
    axios.get("http://localhost:8000/notices").then((res) => {
      setNotices(res.data);
      // setDescriptionId(res.data._id);
    });
    // console.log(descriptionId);
  return (
    <Container className={"mb-10"}>
      <PageHeadding headding={"notice bord"} />
      <div className="max-w-[700px] bg-gray-100 mx-auto px-2 py-6">
        {/* item */}
        {/* <button onClick={() => descriptionId.map((i) => console.log(i))}>
          click
        </button> */}
        {notices.map((i) => (
          <div key={i._id} className="bg-zinc-300 rounded-md my-3">
            <div className="w-full bg-sky-300 px-5 py-3 capitalize flex items-center justify-between rounded-t-md">
              <h2 className="text-xl font-semibold">{i.headline}</h2>
              <span
                className="text-3xl cursor-pointer"
                onClick={() => ( show ? setShow(false) : setShow(true))}
              >
                {show ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>
            {show && (
              <p className="p-4 text-yellow-900">{i.description}</p>
            )}
            <div className="p-4 text-end">13.10.2023</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Announcement;
