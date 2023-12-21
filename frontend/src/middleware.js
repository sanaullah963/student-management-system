export { default } from "next-auth/middleware"
// secret: process.env.NEXTAUTH_SECRET
export const config = { matcher: ["/dashbord","/add-student","/add-teacher","/add-notic"] }