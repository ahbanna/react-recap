// Usecase 1: fetching data from API
import React, { useEffect, useState } from "react";

const ExploreUseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Fetching is not successful. Error: " + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div>
      <h2>Use of useEffect</h2>
      <p>{error}</p>
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

// Usecase 2: Update Timer
/*import React, { useEffect, useState } from "react";

const ExploreUseEffect = () => {
  const [time, setTime] = useState(new Date());
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Starting times");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((preCount) => preCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>Time: {time.toLocaleTimeString()}</h3>
      <h3>Timer: {timer} </h3>
    </div>
  );
};

export default ExploreUseEffect;
*/

// Usecase 3: Update DOM
/*
import React, { useEffect, useState } from "react";

const ExploreUseEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Initial text");

  const increaseCount = () => {
    setCount((preCount) => preCount + 1);
  };
  const textHandler = () => {
    setText("The text has changed");
  };

  useEffect(() => {
    console.log("No dependency so calls with every render");
  });
  useEffect(() => {
    console.log("Empty array so calll only first render");
  }, []);
  useEffect(() => {
    console.log("When the value of count change, then it call");
    document.title = `Click ${count} times`; // it call for first render + every times with count
  }, [count]);

  useEffect(() => {
    console.log("Text has changed:"); // // it call for first render + every times with text
  }, [text]);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={textHandler}>Click to change text</button>
      <p>{text}</p>
    </div>
  );
};

export default ExploreUseEffect;
*/
