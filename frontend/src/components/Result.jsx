'use client'
import React from "react";
import Container from "./Container";

function Result() {
  return (
    <Container>
      <h1 className="text-4xl capitalize my-6 font-semibold text-center">
        student result
      </h1>
      <div className=" mx-auto w-[300px] bg-gray-100 border border-gray-300 py-14 flex flex-col items-center px-4 ">
        <form className="flex flex-col w-full gap-8">
          <select id="year" className="h-10 border border-gray-400 rounded-md px-2">
            <option>Seclet Section </option>
            <option value="2015">2014-2015</option>
            <option value="2015">2015-2016</option>
            <option value="2015">2016-2017</option>
            <option value="2015">2017-2018</option>
            <option value="2015">2018-2019</option>
            <option value="2015">2019-2020</option>
            <option value="2015">2020-2021</option>
          </select>
          <input type="number" placeholder="Your roll" className="h-10 px-3 border border-gray-400 rounded-md" />
          <button className="px-3 py-2 bg-sky-500 rounded-md text-white" onSubmit={(e)=>console.log(e)}>See Result</button>
        </form>
      </div>
    </Container>
  );
}

export default Result;
