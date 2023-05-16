// rfc shortcut
import React, { useState } from "react";

export default function TextForm(props) {
    const UpperCase =()=>{
    //    console.log("Clicked" + text) 
       let newText = text.toLocaleUpperCase()
       settext(newText)
    }
    const LowerCase =()=>{
        // console.log("Clicked") 
        let newText = text.toLocaleLowerCase()
        settext(newText)
     }
    const UpperChange = (event)=>{
        // console.log("Kuch ho raha he")
        settext(event.target.value);
    }
    const clear = ()=>{
        settext('')
    }
    const [text, settext] = useState('Enter text here')
    // const [words, setword] = useState('0 words')
    
    // setword("words = " + text.length)
    return (
        <>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        {/*     
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text} onChange={UpperChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={UpperCase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={LowerCase}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2" onClick={clear}>Clear</button>
      <div className="my-3">

      <h3 className="my-4">Text Summary</h3>
      <p>{text.split(" ").length-1}words and {text.length }characters</p>
      <p>{0.008 * text.split(" ").length-1}Mins to read</p>
      <h2>Preview</h2>
      <p>{text}</p>

      </div>
    </>
  );
}
