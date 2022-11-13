import React,{useState} from 'react'

export default function TextArea(props) {
 
    const upperCase =()=>{
        console.log("Converted to uppertext"+text);
        let newText1=text.toUpperCase();
        setText(newText1);
      }
    const lowerCase =()=>{
        console.log("Converted to lower case"+text);
        let newText1=text.toLowerCase();
        setText(newText1);
      }
      const removeSpaces=()=>{
        console.log("Removed the extra whitespaces"+text);
    
        let newText1="";
        for(var i=0;i<text.length;i++){
        if(text[i]!==' '){
          newText1+=text[i];
        }
        }
        setText(newText1);
      }
      
      const trimText=()=>{
        console.log("Trimmed the first letter in every text")
        let newText1="";
        newText1=text.trim();
         setText(newText1);
    
      }
      
      const caseDisplay=(event)=>{
         console.log("On clicked");
         setText(event.target.value);
      }
      
      const [text,setText]= useState('Enter text here');
      var word=text.split(' ');
      var time=0.0045*word.length;
      return (
        <>
        <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <label for="textbox" class="form-label">Text Analysis</label>
        
        <textarea id="textbox" class="form-control" onChange={caseDisplay} value={text} rows="8" placeholder='Enter the text to check'></textarea>
        
      </div>
    <button className="btn btn-primary" onClick={upperCase}>Convert to uppercase</button>
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={lowerCase}>Convert to lowercase</button>
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={removeSpaces}>Text without any spaces</button>
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={trimText}>Trimmed text is</button>
    <p>The length of the all the characters in the text entered is :  {text.length}</p>
    <p>The number of words in the text is   : {word.length} </p>
    <p> The time taken to read every word is :{time} minutes</p>
      </div>
    
      </>
  )
}
