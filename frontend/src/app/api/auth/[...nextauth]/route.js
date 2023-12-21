import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // all authentication providers insart the array
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     const user = { id: "1", name: "sanaullah", email: "jsmith@example.com" }
  
    //     if (user) {
          
    //       return user
    //     } else {
          
    //       return null
  
          
    //     }
    //   }
    // }),

  ],
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}