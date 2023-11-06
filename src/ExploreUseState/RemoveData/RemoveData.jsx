import React, { useState } from "react";
import stdData from "../../../stdData";
import "./RemoveData.css";

const RemoveData = () => {
  const [data, setData] = useState(stdData);
  const handleRemove = (stdId) => {
    const filterData = data.filter((d) => d.stdId != stdId);
    setData(filterData);
  };
  const removeAll = () => {
    setData([]);
  };
  return (
    <div className="remove-data-area container">
      <div className="all-data">
        {data.map((item) => (
          <div className="single-data">
            <p>Name: {item.stdName}</p>
            <p>Class: {item.stdClass}</p>
            <p>Roll: {item.stdRoll}</p>
            <button onClick={() => handleRemove(item.stdId)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={removeAll}>Remove all</button>
    </div>
  );
};

export default RemoveData;
