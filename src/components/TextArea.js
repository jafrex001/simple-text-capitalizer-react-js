import React from "react";
import './TextArea.css';

const TextArea = () => {
    return (
        <>
        <div className="container">
            <textarea name="textarea" id="textarea" cols="100" rows="10"></textarea>
        </div>
        <div className="container">
        <button className="textsubmit">Click me to Capitalize Text</button>
        </div>
        </>
    );
};

export default TextArea;