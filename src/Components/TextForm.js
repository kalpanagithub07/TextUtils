import React,{ useState} from 'react'



export default function TextForm(props) {

  const handleUpClick= ()=>{
    console.log("UpperCase was Clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case!","success");
  }

  const handleLowClick= ()=>{
    console.log("LowerCase was Clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case!","success");
  }


  const handleClearClick= ()=>{
   setText("");
   props.showAlert("Cleared Text!","success");
  }


  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Text!","success");
  }

  const sentenceText = ()=>{
     let a = text;
     let c = a.split(".");
     let e ="";
    for(let i=0;i<c.length;i++){
      let d = c[i][0].toUpperCase() + c[i].slice(1);
      e = e + d +". ";
    }
    setText(e);
    props.showAlert("Converted to Sentences!","success");

  }


  const ClearWordText = () =>{
    let d = text.split(" ");
    d.splice(-1,1);
   console.log(d)
    setText(d.join(" "));
  }

const handleExtraSpaces =() =>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "))
}


  
  const handleOnChange= (event)=>{
    setText(event.target.value);
  }
  const [text, setText] =useState('');
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#093154'}}></div>
    <div>
       <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light' ,color: props.mode==='dark'?'white':'#093154'}} id="exampleFormControlTextarea1" rows="12"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-3" onClick={sentenceText}>Sentence Text</button>
<button className="btn btn-primary mx-3" onClick={ClearWordText}>Clear Word Text</button>
<button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#093154'}}>
      <h2>Your Text Summary</h2>
      <p>{text ? text.split(" ").length : 0} words and {text.length} characters</p>
      <p>{text ? 0.008 * text.split(" ").length : 0} Mintutes read</p>
      <h3>Preview</h3>
      <p>{text ? text : "No Text available yet"}</p>
    </div>
    </>
  )
}
