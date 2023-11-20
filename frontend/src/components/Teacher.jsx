import React from "react";
import Container from "./Container";
import PageHeadding from "./PageHeadding";

function Teacher() {
  return (
    <Container>
      <div className="w-full">
        <PageHeadding headding={"all teacher"} />
        <table className="w-full capitalize bg-gray-100">
          <thead className="">
            <tr className="bg-gray-800 text-white">
              <th className="border border-x-gray-400">name</th>
              <th className="border border-x-gray-400">depertment</th>
              <th className="border border-x-gray-400">position</th>
              <th className="border border-x-gray-400">details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            <tr>
              <td className="border border-x-gray-400">sahabuddin</td>
              <td className="border border-x-gray-400">computer</td>
              <td className="border border-x-gray-400">senior teacher</td>
              <td className="border border-x-gray-400">
                <button className="underline hover:text-sky-800">more detiles</button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="border border-x-gray-400">riyazul islam</td>
              <td className="border border-x-gray-400">computer</td>
              <td className="border border-x-gray-400">senior teacher</td>
              <td className="border border-x-gray-400">
                <button className="underline hover:text-sky-800">more detiles</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="border border-x-gray-400">rabeya khanom</td>
              <td className="border border-x-gray-400">computer</td>
              <td className="border border-x-gray-400">senior teacher</td>
              <td className="border border-x-gray-400">
                <button className="underline hover:text-sky-800">more detiles</button>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td className="border border-x-gray-400">tasnuba</td>
              <td className="border border-x-gray-400">non tech</td>
              <td className="border border-x-gray-400">senior teacher</td>
              <td className="border border-x-gray-400">
                <button className="underline hover:text-sky-800">more detiles</button>
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <td className="border border-x-gray-400">sakil all masum</td>
              <td className="border border-x-gray-400">computer</td>
              <td className="border border-x-gray-400">CI</td>
              <td className="border border-x-gray-400">
                <button className="underline hover:text-sky-800">more detiles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default Teacher;
