// header array
export const headerArray = [
  { titel: "dashbord", url: "/dashbord" },
  { titel: "all student", url: "/all-student" },
  { titel: "add student", url: "/add-student"},
  { titel: "teacher", url: "/teacher"},
  { titel: "add teacher", url: "/add-teacher"},
  { titel: "notic", url: "/notic" },
  { titel: "result", url: "/result" },
  { titel: "profile", url: "/profile" },
];
// dashbord array
import { FaUserGraduate, FaUserPlus } from "react-icons/fa";
import { FaUserTie, FaUsersLine } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
export const dashbordArray = [
  {
    icon: FaUserGraduate,
    titel: "all student",
    url: "/all-student",
    iconColor: "text-red-500",
    bgColor: "#FF8F8F",
  },
  {
    icon: FaUserPlus,
    titel: "Add New Student",
    url: "/add-student",
    iconColor: "text-red-500",
    bgColor: "FF8F8F",
  },
  {
    icon: FaUsersLine,
    titel: "all teacher",
    url: "/all-teacher",
    iconColor: "text-red-500",
    bgColor: "FF8F8F",
  },
  {
    icon: FaUserTie,
    titel: "add new teacher",
    url: "/add-teacher",
    iconColor: "text-red-500",
    bgColor: "FF8F8F",
  },
  {
    icon: IoIosNotifications,
    titel: "notice",
    url: "/notice",
    iconColor: "text-red-500",
    bgColor: "FF8F8F",
  },
  {
    icon: FcContacts,
    titel: "contact",
    url: "/contact",
    iconColor: "text-red-500",
    bgColor: "FF8F8F",
  },
];
