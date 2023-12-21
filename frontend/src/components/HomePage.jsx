'use client'
import Container from "./Container";
import { useSession, signIn, signOut } from "next-auth/react";
function HomePage() {

  const {data:sercion} = useSession()
  const userData =(e)=>{
    e.preventDefault()
    console.log(sercion);
  }

  return (
    <main>
      <Container>
        <p>this is home page</p>
        {/* sign in */}
        <button className="bg-blue-300 p-3 rounded-md" onClick={() => signIn()}>
          sign in
        </button>
        {/* sign up */}
        <button className="bg-blue-300 p-3 rounded-md" onClick={() => signOut()}>
        signOut 
        </button>
        {/* data */}
        <button className="bg-blue-300 p-3 rounded-md" onClick={userData}>
        data 
        </button>
        {
          sercion ? <p>user is logd in</p>:<p>not have a user</p>
        }
        <br />
        {/* <button className="bg-blue-300 p-3 rounded-md" onClick={userData}>
        custom page 
        </button> */}
        
      </Container>
    </main>
  );
}

export default HomePage;
