import React from "react";
import "./SingleStd.css";

const SingleStd = (props) => {
  console.log(props.info);
  const { stdName, stdClass, stdRoll } = props.info;

  return (
    <div className="single-std">
      <p>My name is: {stdName}</p>
      <p>I read is class: {stdClass}</p>
      <p>My roll no: {stdRoll}</p>
    </div>
  );
};

export default SingleStd;

// import React from "react";
// import "./SingleStd.css";

// // Method 2
// const SingleStd = ({ stdName, stdClass, stdRoll }) => {
//   return (
//     <div className="single-std">
//       <p>My name is: {stdName}</p>
//       <p>I read is class: {stdClass}</p>
//       <p>My roll no: {stdRoll}</p>
//     </div>
//   );
// };

// export default SingleStd;
