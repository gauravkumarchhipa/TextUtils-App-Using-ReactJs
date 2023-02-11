import React, {useState} from 'react'

export default function TextForm(props) {
    

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Coverted to Uppercase!", "success");
    }
    const handleLowerClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Coverted to Lowercase!", "success");
    }

    const handleclearClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newtext ='';
        setText(newtext)
        props.showAlert("Text is Clear", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copy", "success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Remove ExtraSpaces", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText = ("new text"); //wrong way to change the state
    
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white' : '#042743'}}>
            <h1 className="my-4">{props.heading }</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#13466e' : 'white', color : props.mode==='dark'?'white' : '#042743'}} rows="8" value={text}></textarea>
            </div>
            <button disabled ={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled ={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button disabled ={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearClick}>Clear Text</button>
            <button disabled ={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white' : '#042743'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Read Time in Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "Nothing to Preview"}</p>
        </div>
        </>
    
  )
}
