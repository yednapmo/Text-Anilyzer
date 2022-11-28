import React,{useState} from "react";



function TextForm() {
    const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container my-3">
      <div className="form-floating">
        <textarea
            onChange={(event)=>{setText(event.target.value)}}
          className="form-control"
          id="textBox"
          value={text}
          style={{height: "134px"}}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={()=>{setText(text.toUpperCase())}}>Convert to UpperCase</button>
      </div>
      </div>
    </>
  );
}

export default TextForm;
