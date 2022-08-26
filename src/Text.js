import React, {useState} from 'react';

function Text(props) {

    function toUpper(){
        
        const touper=text.toUpperCase();
        textSet(touper);
        props.showAlert("Converted to upper text");

    }
    function toLower(){
        let touper=text.toLowerCase();
        textSet(touper);
        props.showAlert("Converted to lower text");
    }
    function findURL(){
        const regex = /(https?:\/\/[^\s]+)/g
        if(regex.test(text))
        {
            
            let check=text.match(regex);
            setArr(check+" ");

        }
        else{
            let check="No URL Found";
            setArr(check+" ");
        }
        props.showAlert("URL display");
    }
    const set=(e)=>{
        textSet(e.target.value);
    }

    const copyText=()=>{
        var text=document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getElementById("titleClass").title="Copied!";
        props.showAlert("Text copied");
    }
    const clearText=()=>{
        textSet("");
    }
const [arr, setArr]=useState("");    
const [text,textSet]=useState("");
    return (
        <>
            <div className={`container my-4 text-${props.mode==="light"?"dark":"light"}`}>
                <h1 className='mx-4'>Enter Text Here</h1>
                <div className="input-group">
                    <textarea className={`form-control text-${props.mode==="light"?"dark":"light"}`} id="textBox" style={{backgroundColor:props.mode==="light"?"#DAE9FF":"#252e48"}} value={text} onChange={set} aria-label="With textarea" rows="8" placeholder='Enter Text'></textarea>
                </div>
                <button className="btn btn-primary my-2 mx-4" onClick={toUpper}>To Upper Case</button>
                <button className="btn btn-primary my-2 " onClick={toLower}>To Lower Case</button>
                <button className="btn btn-primary my-2 mx-4" onClick={findURL}>Find URL</button>
                <button className="btn btn-primary my-2 " id='titleClass' onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-4" onClick={clearText}>Clear</button>
            </div>
            <div className={`container text-${props.mode==="light"?"dark":"light"}`} >
                <h2>Summary</h2>
                <p>Words count: <b>{text.split(" ").length-1}</b></p>
                <p>Alphabet count: <b>{text.length}</b></p>
                <p>Estimated time to read the text: <b>{0.22*(text.split(" ").length-1)}</b> sec</p>
                <p><b>{arr}</b></p>
                <h2>Preview</h2>
                <p> {text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
    )
};

export default Text;