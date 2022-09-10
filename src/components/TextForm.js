import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the Text here");
  //   const [textBtn, setBtnText] = useState("Enable Dark Mode");
  //   const [styles, setMyStyle] = useState({
  //     backgroundColor: "black",
  //     color: "white",
  //   });

  const onClickUpHandle = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };

  //   const onClickMoodHandle = () => {
  //     if (styles.color === "white") {
  //       setMyStyle({
  //         color: "black",
  //         backgroundColor: "white",

  //       });
  //       setBtnText("Enable Dark Mode");
  //     } else {
  //       setMyStyle({
  //         color: "white",
  //         backgroundColor: "black",

  //       });
  //       setBtnText("Enable Light Mode");
  //     }
  //   };

  const onClickDownHandle = () => {
    let newText = text.toLowerCase();
    setText(newText);
   props.showAlert("Converted to Lower Case","success")
  };
  const onClickClearHandle = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared ","danger")
    

  };
  const onClickReverseHandle = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const onChangeHandle = (event) => {
    setText(event.target.value);
    console.log("onChangeHandle");
  };

  const onClickExtraSpacesHandle = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
  };

  const onClickCopyHandle = () => {
    let newText = document.getElementById("myForm");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been copied ","danger")

  };

  return (
    <>
      <h1 className="container my-3" style={{
                color: props.mode === "dark" ? "white" : "black"
              }}>{props.title}  </h1>
      <div className="container my-3">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myForm"
            style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black"
              }}
            rows="8"
            value={text}
            onChange={onChangeHandle}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={onClickUpHandle}
          disabled={text.length === 0}
        >
          Convert to Upper Case
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-1 my-1"
          onClick={onClickDownHandle}
          disabled={text.length === 0}
        >
          Convert to Lower Case
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={onClickClearHandle}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={onClickReverseHandle}
          disabled={text.length === 0}
        >
          Change to Reverse
        </button>
        {/* <button
          type="button"
          className="btn btn-dark mx-1"
          onClick={onClickMoodHandle}
        >
          {textBtn}
        </button> */}

        <button
          type="button"
          className="btn btn-warning mx-1 my-1 text-light"
          onClick={onClickExtraSpacesHandle}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-info mx-1 text-light my-1"
          onClick={onClickCopyHandle}
          disabled={text.length === 0}
        >
          Copy Text
        </button>

        <div className="container my-3" style={{
                
                color: props.mode === "dark" ? "white" : "black"
              }} >
          <h2>Summary</h2>
          <p>
            {text.split(/\s+/).filter((e)=>{ return e.length !==0}).length } words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((e)=>{ return e.length !==0}).length } minutes to read</p>
          <h2>Preview</h2>

          <p>{text.length>0?text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = {
  title: PropTypes.string.isRequired,
};
