import React, { useState } from "react";
import './TextArea.css';

const TextArea = () => {

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter your text here")

    return (
        <div className="container">
            <textarea name="textarea" id="textarea" cols="100" rows="10" value={text} onChange={handleChange}></textarea>
            <button className="textsubmit" onClick={handleClick} >Click to Capitalize</button>
        </div>
    );
};

export default TextArea;

