import React, { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((studentsData) => {
        setStudents(studentsData);
      })
      .catch((error) => console.error(error));
  }, []);

  const removeStudent = (id) => {
    // Implement the logic to remove the student with the specified ID
    // This could involve making another API request to delete the student
    // and updating the 'students' state accordingly.
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
    </div>
  );
}

export default StudentList;
