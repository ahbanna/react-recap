import { useState } from "react";

const UserForm = () => {
  const [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    email: "",
    city: "",
    gender: "Male",
  });

  const InputOnChange = (property, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };
  const FormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
    console.log(formObj);
  };
  return (
    <div>
      <h2>This is Managing Form Submit</h2>
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          type="text"
          value={formObj.fName}
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          type="text"
          value={formObj.lName}
          placeholder="Last Name"
        />
        <input
          onChange={(e) => {
            InputOnChange("email", e.target.value);
          }}
          type="email"
          value={formObj.email}
          placeholder="Email"
        />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          value={formObj.city}
        >
          <option value="">Choose city</option>
          <option value="dhaka">Dhaka</option>
          <option value="bogra">Bogra</option>
        </select>
        <input
          onChange={(e) => {
            InputOnChange("gender", "Male");
          }}
          type="radio"
          checked={formObj.gender === "Male"}
        />
        Male
        <input
          onChange={(e) => {
            InputOnChange("gender", "Female");
          }}
          type="radio"
          checked={formObj.gender === "Female"}
        />
        Femal
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
