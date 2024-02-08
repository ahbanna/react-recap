import React, { useEffect, useRef } from "react";

const ExploreUseRef = () => {
  // ---------- InnerText, InnerHTML -----------
  // const myHeading = document.getElementById("myHeading");
  const myHeading = useRef();
  const myHeadingChnage = () => {
    myHeading.current.innerText = "Main Heading changed using useRef";
    // myHeading.current.innerHTML = "<ul><li>A</li></ul>";
  };

  // ---------- Working with CSS ---------------
  const myPara = useRef();
  const classChange = () => {
    myPara.current.classList.remove("old-class");
    myPara.current.classList.add("new-class");
  };

  // ------- Attribute ---------
  const myImage = useRef();
  const myImageChange = () => {
    myImage.current.src =
      "https://i.pinimg.com/originals/24/df/91/24df91272558c0f20df49405755a8e9d.jpg";
    myImage.current.setAttribute("height", "300px");
  };

  // ---------  For focusing  ---------------
  const fName = useRef();
  useEffect(() => {
    console.log(fName.current); // <input type="text" placeholder="First Name" />
    fName.current.focus();
  }, []);

  // -----------for multiple reference in seperate line ------------
  // const fName = useRef();
  // const lName = useRef();
  // const nameValue = () => {
  //   const fNamevalue = fName.current.value;
  //   const lNamevalue = lName.current.value;
  //   alert(`${fNamevalue} ${lNamevalue}`);
  // };

  // ---------for multiple reference in single line-------------
  // let fName,
  //   lName = useRef();
  // const nameValue = () => {
  //   const fNamevalue = fName.value;
  //   const lNamevalue = lName.value;
  //   alert(`${fNamevalue} ${lNamevalue}`);
  // };

  // --------- ------------
  const number = useRef(0);
  const numberIncrease = () => {
    number.current++;
    console.log(number.current);
  };

  // -------- ------------

  return (
    <div>
      <h2>useRef Example</h2>
      <div>
        {/* <h5 id="myHeading">Main heading</h5> */}
        <h5 ref={myHeading}>Main heading</h5>
        <button onClick={myHeadingChnage}>Click to change</button>
      </div>
      <div>
        <p className="old-class" ref={myPara}>
          This is a paragraph text
        </p>
        <button onClick={classChange}>Click to change class</button>
      </div>
      <div>
        <img
          ref={myImage}
          src="https://images.mid-day.com/images/images/2017/feb/shahid-afridi-14-l.jpg"
        />
        <button onClick={myImageChange}>Click to change image</button>
      </div>
      <div>
        {/* for foucus */}
        <input type="text" ref={fName} placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

        {/* */}
        {/* <input type="text" ref={fName} placeholder="First Name" />
        <input type="text" ref={lName} placeholder="Last Name" />
        <button onClick={nameValue}>Click</button> */}

        {/* for multiple reference in single line */}
        {/* <input
          type="text"
          ref={(a) => {
            fName = a;
          }}
          placeholder="First Name"
        />
        <input
          type="text"
          ref={(a) => {
            lName = a;
          }}
          placeholder="Last Name"
        />
        <button onClick={nameValue}>Submit</button> */}
      </div>
      <div>
        <h4>See in console</h4>
        <button onClick={numberIncrease}>Click to increase</button>
      </div>
    </div>
  );
};

export default ExploreUseRef;
