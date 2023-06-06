import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to upper case!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lower case!", "success");
  };

  const handleCapClick = () => {
    let newText = text.toString().split(" ");
    // console.log(newText);
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    props.showAlert("Text converted to capital case!", "success");
  };

  const handleResetClick = () => {
    setText("");
  };

  const handleonChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  //   text = "shdkf" //Cannot change state like this
  //   setText("shdkfj") //Correct way to change state

  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "white"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleonChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleCapClick}
        >
          Capitalize case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleResetClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleCopyClick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-2"
          onClick={handleExtraSpace}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "white "
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
