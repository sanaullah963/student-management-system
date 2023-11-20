"use client";
import React, { useState } from "react";
import Container from "./Container";
import { loginImage } from "@/image/image";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
  // usestate
  const [radioValue, setRadioValue] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [section, setSection] = useState("");

  // input handel
  const inputBtn = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      toast.error("Requier Data");
    } else {
      toast.success("successfully signin");
    }
  };
  return (
    <main>
      <Container>
        <div className="flex flex-col items-center justify-center my-10">
          <div className="bg-gray-300/50 flex flex-col items-center px-5 py-7 rounded-md">
            <Image src={loginImage} alt="logo" className="rounded-lg" />
            <h2 className="font-semibold capitalize text-sky-600 md:text-2xl text-md mb-4">
              student Management System Panel
            </h2>
            <div className="w-full bg-sky-200 py-3 flex justify-center rounded-md mb-10 px-2">
              Please login with your Username and Password.
            </div>
            {/* from section */}
            <form
              className="flex gap-5 mb-3"
              onInput={(e) => setRadioValue(e.target.value)}
            >
              <div>
                <input
                  type="radio"
                  name="name"
                  value={"teacher"}
                  id="teacher"
                />
                <label htmlFor="teacher">Teacher</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="name"
                  value={"student"}
                  id="student"
                />
                <label htmlFor="student">Student</label>
              </div>
            </form>
            {/* input section */}
            <form className="w-full flex flex-col ">
              {radioValue === "student" ? (
                <div className="">
                  <div className="mb-5">
                    <label htmlFor="section">Your Section :</label>
                    <br />
                    <select
                      id="section"
                      name="section"
                      className="w-full h-10 rounded-md px-4 outline-none"
                      onChange={(e) => setSection(e.target.value)}
                    >
                      <option>seclect your section</option>
                      <option value="11-12">11-12</option>
                      <option value="12-13">12-13</option>
                      <option value="13-14">13-14</option>
                      <option value="14-15">14-15</option>
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
                  <div className="">
                    <label htmlFor="userName" className="capitalize">
                      enter your roll
                    </label>
                    <input
                      type="text"
                      onInput={(e) => setUserId(e.target.value)}
                      className="w-full outline-none rounded-md h-10 px-4 mt-2"
                      placeholder="roll"
                    />
                  </div>
                </div>
              ) : (
                <div className="">
                  <label htmlFor="userName" className="capitalize">
                    enter your userId
                  </label>
                  <input
                    type="text"
                    onInput={(e) => setUserId(e.target.value)}
                    className="w-full outline-none rounded-md h-10 px-4 mt-2"
                    placeholder="Usar ID"
                  />
                </div>
              )}

              <div className=" mt-5">
                <label htmlFor="password" className="capitalize">
                  enter your password
                </label>
                <input
                  type="password"
                  onInput={(e) => setPassword(e.target.value)}
                  className="w-full outline-none rounded-md h-10 px-4 mt-2"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-sky-500  py-2 rounded-md text-xl mt-3"
                onClick={inputBtn}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
      <Toaster />
    </main>
  );
}
