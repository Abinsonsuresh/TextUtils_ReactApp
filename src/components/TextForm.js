// rfc shortcut
import React, { useState } from "react";

export default function TextForm(props) {
  const UpperCase = () => {
    //    console.log("Clicked" + text)
    let newText = text.toLocaleUpperCase();
    settext(newText);
    props.showAlert("Converted to UpperCase", "success")
  };
  const LowerCase = () => {
    // console.log("Clicked")
    let newText = text.toLocaleLowerCase();
    settext(newText);
    props.showAlert("Converted to LowerCase", "success")

  };
  const UpperChange = (event) => {
    // console.log("Kuch ho raha he")
    settext(event.target.value);
  };
  const clear = () => {
    settext("");
  };
  const [text, settext] = useState("Enter text here");
  // const [words, setword] = useState('0 words')

  // setword("words = " + text.length)
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        {/*     
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={UpperChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white"
          }}
          // style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={UpperCase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={LowerCase}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-2 my-1" onClick={clear}>
        Clear
      </button>
      <div className="my-3" style={{color: props.mode==='light'?'black':'white'}}   >
        <h3 className="my-4">Text Summary</h3>
        <p>
          {text.split(" ").filter((element)=>{
            return element.length!==0
          }).length}words and {text.length}characters
        </p>
        <p>{0.008 *text.split(" ").filter((element)=>{
            return element.length!==0
          }).length}Mins to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something to preview"}</p>
      </div>
    </>
  );
}
