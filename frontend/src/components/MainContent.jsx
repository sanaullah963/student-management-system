import React from 'react'
import Container from './Container'
import Header from './Header';

function MainContent({children}) {
  return (
    <main>
      {/* <Header/> */}
      <Container>
      <div className="flex h-screen w-full fixed ">
        <div className="w-[180px]  overflow-y-scroll scrollbarr-hidden">
          <Header />
        </div>
        <div className="flex-1 overflow-y-scroll mx-4">
          {children}
        </div>
      </div>
      </Container>
    </main>
  );
}

export default MainContent