import { useState } from "react";

const UserForm = () => {
  const [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    email: "",
    city: "",
    gender: "Male",
  });

  // const handleChange = (name, value) => {
  //   setFormObj((preObj) => ({
  //     ...preObj,
  //     [name]: value,
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
    console.log(formObj);
  };
  return (
    <div>
      <h2>This is Managing Form Submit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <input
          onChange={(e) => {
            handleChange("fName", e.target.value);
          }}
          type="text"
          value={formObj.fName}
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            handleChange("lName", e.target.value);
          }}
          type="text"
          value={formObj.lName}
          placeholder="Last Name"
        />
        <input
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
          type="email"
          value={formObj.email}
          placeholder="Email"
        />
        <select
          onChange={(e) => {
            handleChange("city", e.target.value);
          }}
          value={formObj.city}
        >
          <option value="">Choose city</option>
          <option value="dhaka">Dhaka</option>
          <option value="bogra">Bogra</option>
        </select>
        <input
          onChange={(e) => {
            handleChange("gender", "Male");
          }}
          type="radio"
          checked={formObj.gender === "Male"}
        />
        Male
        <input
          onChange={(e) => {
            handleChange("gender", "Female");
          }}
          type="radio"
          checked={formObj.gender === "Female"}
        />
        Female
        <br /> */}
        </div>
        <div>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="fName"
                value={formObj.fName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lName"
                value={formObj.lName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formObj.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              City:
              <select
                name="city"
                value={formObj.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Bogra">Bogra</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </label>
          </div>
          <label>Gender:</label>
          <div>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formObj.gender === "Male"}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formObj.gender === "Female"}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Other
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formObj.gender === "other"}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
