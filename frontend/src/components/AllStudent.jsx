import React from "react";
import Container from "./Container";
import Link from "next/link";
import PageHeadding from "./PageHeadding";
const Td = ({ roll, name, section }) => {
  return (
    <tr className="text-center">
      <td className="border border-x-gray-500">{roll}</td>
      <td className="border border-x-gray-500">{name}</td>
      <td className="border border-x-gray-500">{section}</td>
      <td className="border border-x-gray-500 text-center flex gap-x-4 justify-center">
        <button className="px-2 py-1 bg-red-600 rounded-md text-white">
          delet
        </button>
        <button className="px-2 py-1 bg-green-600 rounded-md text-white">
          edit
        </button>
      </td>
    </tr>
  );
};
// main function
function AllStudent() {
  return (
    <Container>
      <PageHeadding headding={'all Student list'}/>

      <div className="w-full ">
        {/* header row */}
        <div className="flex bg-slate-100 uppercase ">
          {/* table section  */}
          <table className="w-full">
            {/* teble headding */}
            <thead>
              <tr>
                <th className="border border-x-gray-500">roll</th>
                <th className="border border-x-gray-500">name</th>
                <th className="border border-x-gray-500">section</th>
                <th className="border border-x-gray-500">action</th>
              </tr>
            </thead>

            {/* table first row */}
            <tbody className="text-center ">
              
              <Td name={'sanaullah'} roll={'145824'} section={'2020-2021'}/>
              <Td name={'amanullah'} roll={'215825'} section={'2020-2021'}/>
              <Td name={'najmul huda'} roll={'381282'} section={'2020-2021'}/>
              <Td name={'tolha khan'} roll={'658234'} section={'2020-2021'}/>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default AllStudent;
