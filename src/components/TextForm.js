import React, { useState } from "react";
// import copy from 'copy-to-clipboard';

export default function textform(prop) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
 

  const UpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Success: Convert To Uppercase...","success");
  };
  const LoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Success: Convert To Lowercase...","success");

  };
  const copyText = () => {
    console.log("i m happy");
    var text = document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    prop.showAlert("Success: Copy Text...","success");

  };
  const capitalize = () => {
 
    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 1; i <= text.length-1; i++) {
      let curCharacter = text[i],
        preCharacter = text[i - 1];
      if (preCharacter === " ") {
        curCharacter = text[i].toUpperCase();
      } else {
        curCharacter = text[i];
      }
      CapitalizeWords += curCharacter;
    }
     setText(CapitalizeWords);
     prop.showAlert("Success: Convert To Capitalize...","success");

  };
  const clear = () => {
    let newText = "";
    setText(newText);
    prop.showAlert("Success: Clear Text...","success");

  };
  const onChange = (event) => {
    console.log("On Chnaged");
    setText(event.target.value);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: prop.mode === "dark" ? "white" : "black" }}
      >
        <h3>{prop.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onChange}
            id="mytext"
            rows="5"
            style={{
              backgroundColor: prop.mode === "light" ? "white" : "grey",
              color: prop.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={UpClick}>
          Convert to Upercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={LoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalize}>
          Convert to Capitalize
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length===0}s className="btn btn-primary mx-1 my-1" onClick={clear}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: prop.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summery</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcter
        </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox!!"}</p>
      </div>
    </>
  );
}
