// Usecase 1: fetching data from API
/*import React, { useEffect, useState } from "react";

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
*/

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
/*import React, { useEffect, useState } from "react";

const ExploreUseEffect = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((preCount) => preCount + 1);
  };
  const decreseCount = () => {
    setCount((preCount) => preCount - 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log("Update");
    document.title = `Click ${count} times`; // it runs every times when rendering
  }, [count]);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default ExploreUseEffect;
*/
