import React, { useEffect, useState } from "react";
import HelpService from "../service/HelpService";

import { Link } from "react-router-dom";

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    getAllStudents();
  })

  const getAllStudents=()=>{
    HelpService.getAllStudents().then((response)=>{
      setStudents(response.data)
      console.log(response.data);
  }).catch(error=>{
      console.log(error);
  })
  }

  const deleteStudent=(id)=>{
    HelpService.deleteStudent(id).then((response)=>{
      getAllStudents();
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="container">
    
      <h1 className="text-center">List of students</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Student Id</th>
          <th>Student First Name</th>
          <th>Student Last Name</th>
          <th>Student class</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {students.map((students) => (
            <tr key={students.id}>
              <td>{students.id}</td>
              <td>{students.fname}</td>
              <td>{students.sname}</td>
              <td>{students.standard}</td>
              <td><Link className="btn btn-success" to={`/add/${students.id}`}>update</Link>
              <Link className="btn btn-danger" onClick={()=>deleteStudent(students.id)}>delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/add`} className="btn btn-primary">Add student</Link>
    </div>
  );
};

export default ListStudents;
