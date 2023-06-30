import App from "./App";

export default function StudentForm(props) {
  const saveStudent = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const newStudent = {
      name: firstName,
      lastName: lastName,
    };

    console.log(newStudent);

    fetch("http://localhost:3005/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((data) => {
        console.log("Student added:", data);
        props.afterSave(); // Fetch and update the student list after adding the new student
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <input id="firstName" placeholder="First Name" />
      <input id="lastName" placeholder="Last Name" />
      <button onClick={saveStudent}>Save</button>
    </div>
  );
}
