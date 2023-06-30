import React, { useEffect, useState } from "react";
import StudentForm from "./StudentForm";

function StudentList() {
  const [students, setStudents] = useState([]);
  const fetchStudents = () => {
    fetch("http://localhost:3005/students")
      .then((response) => response.json())
      .then((studentsData) => {
        setStudents(studentsData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(fetchStudents, []);

  const removeStudent = (id) => {
    fetch("http://localhost:3005/students/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log("Student deleted:", id);
        fetchStudents();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.last_name}</td>
              <td>
                <button onClick={() => removeStudent(student.id)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <StudentForm afterSave={fetchStudents}></StudentForm>
    </div>
  );
}

export default StudentList;
