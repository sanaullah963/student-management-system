// header array
import { MdSpaceDashboard } from "react-icons/md";
export const headerArray = [
  { titel: "dashbord", url: "/dashbord",icon:MdSpaceDashboard, },
  { titel: "all student", url: "/all-student",icon:FaUserGraduate , },
  { titel: "add student", url: "/add-student",icon:FaUserPlus ,},
  { titel: "teacher", url: "/teacher",icon:FaUsersLine ,},
  { titel: "add teacher", url: "/add-teacher",icon:FaUserTie ,},
  { titel: "add notic", url: "/add-notic",icon:IoIosNotifications , },
  { titel: "announcement", url: "/announcement",icon:TfiAnnouncement , },
  { titel: "result", url: "/result",icon:FaUserGraduate , },
  { titel: "profile", url: "/profile",icon:FaUserGraduate , },
];
// dashbord array
import { FaUserGraduate, FaUserPlus } from "react-icons/fa";
import { FaUserTie, FaUsersLine } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { FcContacts } from "react-icons/fc";
import { TfiAnnouncement } from "react-icons/tfi";
export const dashbordArray = [
  {
    icon: FaUserPlus,
    titel: "Add New Student",
    url: "/add-student",
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
    titel: "add-notice",
    url: "/add-notic",
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
