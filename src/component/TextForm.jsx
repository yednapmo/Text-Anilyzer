import React,{useState} from "react";
import Alert from "./Alert";



function TextForm(props) {
    const [text, setText] = useState("");
    const lengthWords=text.split(" ").length;
    const characterLength = text.length;
    const ReadingTime = lengthWords*0.008;
    const upperCase = ()=>{
      setText(text.toUpperCase(),
      props.showAlert('Uppercase converted'))};
    const lowerCase = ()=>setText(text.toLowerCase(),props.showAlert('Lowercase converted'));
    const targetValue = (event)=>{setText(event.target.value)};
    const clearText = ()=>setText('')
    const removeextraSpace = ()=>setText(text.trim());


  return (
    <>
    <div className="container my-3">
      <div className="form-floating">
        <textarea
            onChange={targetValue}
          className="form-control"
          id="textBox"
          value={text}
          style={{height: "134px"}}
        ></textarea>

        <button className="btn btn-primary my-3" onClick={upperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={removeextraSpace}>Remove Extra Spaces</button>

      </div>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{lengthWords} words and {characterLength} characters</p>
      </div>
      <div className="container my-2">
        <h1>Time to read</h1>
        <p>{ReadingTime} minutes</p>
      </div>
      <div className="container my-2">
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
