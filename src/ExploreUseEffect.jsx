import React, { useEffect, useState } from "react";

const ExploreUseEffect = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <h2>Use of useEffect</h2>
      {users.map((user) => (
        <div style={{ background: "#cee7fb" }}>
          <h5>Name: {user.name}</h5>
          <UserEmail userEmail={user.email}></UserEmail>
        </div>
      ))}
    </div>
  );
};

function UserEmail(props) {
  return (
    <div>
      <p>Email: {props.userEmail}</p>
    </div>
  );
}

export default ExploreUseEffect;
