import React from "react";

function Container({ children, className }) {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-6`}>
      {children}
    </div>
  );
}

export default Container;
