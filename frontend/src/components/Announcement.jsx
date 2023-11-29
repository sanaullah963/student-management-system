"use client";
import React, { useState } from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
//----------main function
function Announcement() {
  const [show, setShow] = useState(false);
  const [notices, setNotices] = useState([]);
  const [noticeId, setNoticeId] = useState("0");
  //----------get mathod
  axios.get("http://localhost:8000/notices").then((res) => {
    setNotices(res.data);
  });

  return (
    <Container className={"mb-10"}>
      <PageHeadding headding={"notice bord"} />
      <div className="max-w-[700px] bg-gray-100 mx-auto px-2 py-6">
        {/*----------total announcement */}
        <div className="">
          <h2 className="bg-purple-600 font-semibold inline-block px-3 py-2 text-white rounded-md">
            Total student : {notices.length}
          </h2>
        </div>
        {/*--------announcement item */}
        {notices.map((i) => (
          <div key={i._id} className="bg-zinc-300 rounded-md my-3">
            <div className="w-full bg-sky-300 px-5 capitalize flex items-center justify-between rounded-t-md">
              <h2 className="text-xl font-semibold">{i.headline}</h2>
              <span
                className="text-3xl cursor-pointer"
                onClick={() => (
                  setNoticeId(i._id),
                  console.log(noticeId, show),
                  show ? setShow(false) : setShow(true)
                )}
              >
                {/*collapse button */}
                {i._id == noticeId ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>
            {show && i._id == noticeId && (
              <p className="p-4 text-yellow-900">{i.description}</p>
            )}
          <div className="p-2 text-end">{i.fullDate}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Announcement;
