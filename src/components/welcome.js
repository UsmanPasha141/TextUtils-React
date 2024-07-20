import React from "react";

export default function welcome() {
  const style = {
    color: "black",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div className="container">
      <h1 style={style}>WELCOME TO OUR WEBSITE TEXTUTILS</h1>
      <h1 style={style}>WE HAVE MANY OPTIONS LIKE CONVERT TEXT :</h1>
      <h1 style={style}>UPPERCASE TO LOWERCASE </h1>
      <h1 style={style}>LOWERCASE TO UPPERCASE </h1>
      <h1 style={style}> WORD COUNT</h1>
      <h1 style={style}> CHARACTER COUNT</h1>
      <h1 style={style}> PREVIEW TEXT</h1>
    </div>
  );
}
