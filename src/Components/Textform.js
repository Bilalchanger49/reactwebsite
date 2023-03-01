import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleonchange = (event) => {
        // console.log("onchange") 
        setText(event.target.value)
    }
    
    const longestword = () => {
        let word = text.split(" ")
        let longest = word[0];
 
        for (var i = 0; i < word.length; i++) {
           
            if (word[i].length > longest.length) {
                longest = word[i];
            }

        }
     return longest
    }

    const handleCopy = () => {
        let Text = document.getElementById("myBox")
        Text.select()
        navigator.clipboard.writeText(Text.value)
        props.showAlert("Text Copied", "success")

    }

    const handleExtraSpaces = () => {
        let Text = text.split(/[ ]+/)
        setText(Text.join(" ")) 
        props.showAlert("Extra spaces removed", "success")

    }
    const words = () =>{
    let word;
    let num = 1;
        if(text.charAt(text.length-1) === " "){
          while (text.charAt(text.length-num) === " ") {
            word = (text.split(" ").length)-num
            num++;
          }
           
        }
        else if(text.charAt(0) === ""){
            word = (text.split(" ").length)-1
        }
        else{
            word = (text.split(" ").length)
        }
        return word
    }
    const character = () => {
        let char = 0;
        for (let i = 0; i < text.length; i++){
            if(text.charAt(i) !== " "){
                char++
            }
            
        }
       return char
    }


    const [text, setText] = useState("Enter you Text")
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode ==='dark'?'gray':'white' }} onChange={handleonchange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
                <button className="btn btn-primary ms-4" onClick={handleLowClick}>convert to Lowercase</button>
                <button className="btn btn-primary ms-4" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary ms-4" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary ms-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black' }}>
                <h1>Your Text Summary</h1>
                <p>{words()} words and {character()} characters</p>
                <p>{(text.split(" ").length * 0.008)* 60 } second read</p>
                <h5>Longest Word</h5>
                <p> {longestword()} </p>


                <h2>Preview</h2>
                <p>{text}</p>

              
           
            </div>
        </>
    )
}
