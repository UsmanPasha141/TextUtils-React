import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  // console.log(mode);
  const handleOnchange = function (event) {
    setText(event.target.value);
  };

  const handleUpClick = function () {
    // console.log(text);
    const newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
    showAlert("The Text has been converted to UpperCase ", "success");
  };

  const handleLoClick = function () {
    const newtext = text.toLowerCase();
    setText(newtext);
    showAlert("The Text has been converted to LowerCase ", "success");
  };

  const handleFistLetterClick = function () {
    if (text[0] === undefined) {
      return;
    }
    const makeingOneLineArr = text.split("\n");
    const makeingOneLineStr = makeingOneLineArr.join(" ");
    // console.log(makeingOneLineStr);
    const splitedText = makeingOneLineStr.split(" ");
    // console.log(splitedText);
    const newText = splitedText.map((text) => {
      if (text[0] === undefined) {
        return;
      }
      return text[0].toUpperCase() + "" + text.slice(1);
    });
    setText(newText.join(" "));
  };
  const handleReverseClick = function () {
    // const newText = text.split(" ").map((text) => text.reverse());
    const newText = text.split(" ").reverse();
    setText(newText.join(" "));
    showAlert("The text has Reversed ", "success");
  };

  const [text, setText] = useState("");
  const [UIcolor, setUIcolor] = useState("");
  // console.log(useState("Enter the Text Here")); // this text will be in the text variable
  // console.log(text); // text variable
  // text = "new Text"; // wronge way to change the text
  // setText("New Text"); // correct way to set text

  return (
    <>
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "#212530" }}
      >
        <h1>{heading}</h1>
        {/* Above "container my-3" is the BootStrap property for the Styling */}
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: mode === "dark" ? "#212530" : "white",
              color: mode === "dark" ? "white" : "#212530",
            }}
            className="form-control"
            value={text}
            onChange={handleOnchange} // to update the text in the box as user type
            // onChange={noCharacters} //we cannot put 2 onChanges in the same elements
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        {/* <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleFistLetterClick}>
        Convert the first letter to UpperCase
      </button> */}
        <Button btnName="primary" eventHandler={handleUpClick}>
          Convert to UpperCase
        </Button>
        <Button btnName="primary" eventHandler={handleFistLetterClick}>
          Convert the first letter to UpperCase
        </Button>
        <Button btnName="primary" eventHandler={handleLoClick}>
          Convert to LowerCase
        </Button>
        <Button btnName="primary" eventHandler={handleReverseClick}>
          Reverse the Text
        </Button>
      </div>
      <div
        className="container"
        style={{ color: mode === "dark" ? "white" : "#212530" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{text.split(/\s+/).filter((t) => t.length !== 0).length}</b> words
          and <b>{text.length}</b> characters.
        </p>
        <p>
          <b>
            {(1 / 125) *
              60 *
              text.split(" ").filter((t) => t.length !== 0).length}
          </b>{" "}
          Seconds to read.
        </p>
        <h3>Preview the Text Which you have been Entered in the TextArea..</h3>
        <p style={{ color: `${UIcolor}` }}>{text}</p>
        <h3>Set the color of text</h3>
        <textarea
          name="c"
          onChange={(e) => setUIcolor(e.target.value)}
          style={{
            height: "40px",
            width: "150px",
            color: mode === "dark" ? "white" : "#212530",
            backgroundColor: mode === "dark" ? "#212530" : "white",
          }}
        ></textarea>
      </div>
    </>
  );
}

function Button({ btnName, eventHandler, children, text }) {
  return (
    <button className={`btn btn-${btnName} mx-1 my-1`} onClick={eventHandler}>
      {/** mx-2 is a class in BootStrap which gives the margin in the axis */}
      {children}
    </button>
  );
}
