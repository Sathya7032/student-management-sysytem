import React from "react";
import Header1 from "./Header1";
import ListStudents from "./ListStudents";


const Home1 = () => {
  return (
    <div>
      <Header1 />
      <a href="/students">list</a><br/>
      <a href="/add"> add student</a>
      
    </div>
  );
};

export default Home1;
