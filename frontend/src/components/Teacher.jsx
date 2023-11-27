"use client";
import React, { useState } from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";
import axios from "axios";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  axios
    .get("http://localhost:8000/teachers")
    .then((res) => setTeachers(res.data));

  // teachers.map(e=>console.log(e))

  return (
    <Container>
      <div className="w-full">
        <PageHeadding headding={"all teacher"} />
        <table className="w-full capitalize bg-gray-100">
          <thead className="">
            <tr className="bg-gray-800 text-white">
              <th className="border border-x-gray-400">si</th>
              <th className="border border-x-gray-400">name</th>
              <th className="border border-x-gray-400">depertment</th>
              <th className="border border-x-gray-400">position</th>
              <th className="border border-x-gray-400">details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {teachers.map((data,index) => (
              <tr key={data._id} className={` h-14 ${index%2 && ('bg-gray-300')} `}>
                <td className="border border-x-gray-400">{index+1}</td>
                <td className="border border-x-gray-400">{data.name}</td>
                <td className="border border-x-gray-400">{data.technology}</td>
                <td className="border border-x-gray-400">{data.designation}</td>
                <td className="border border-x-gray-400">
                  <button className="underline hover:text-sky-800">
                    more detiles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Teacher;
