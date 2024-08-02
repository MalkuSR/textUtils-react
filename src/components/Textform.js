import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        setNotification2(true);
        setTimeout(() => setNotification2(false), 2000);
    }
    const convertToLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
        setNotification3(true);
        setTimeout(() => setNotification3(false), 1500);
    }
    const handleRemoveExtrasapcesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        setNotification(true);
        setTimeout(() => setNotification(false), 1000);
    }
    const handleClearClick = () => {
        let newText = ""
        setClear(true);
        setTimeout(() => setClear(false), 1500);
        setText(newText)
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        setNotification4(true);
        setTimeout(() => setNotification4(false), 1500);
    }
    const handleEmailCopyClick = () => {
        const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const emails = text.match(emailPattern);
        navigator.clipboard.writeText(emails);
        setemail(true);
        setTimeout(() => setemail(false), 1500);
    }
    const handleOnChange = (event) => {
        console.log("On change");

        setText(event.target.value);
    }
    const [email, setemail] = useState(false);
    const [clear, setClear] = useState(false);
    const [notification, setNotification] = useState(false);
    const [notification2, setNotification2] = useState(false);
    const [notification3, setNotification3] = useState(false);
    const [notification4, setNotification4] = useState(false);
    const [text, setText] = useState("");
    return (
        <>
            <div className="container mt-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.Heading} </h1>
                <div className="mb-3 ">
                    <textarea value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : '#e1e1e1', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to upercase</button>
                {notification2 && <div className="notification">Converted to uper case!</div>}
                <button onClick={convertToLower} className="btn btn-primary mx-1">Convert to lowercase</button>
                {notification3 && <div className="notification">Converted to lower case!</div>}
                <button onClick={handleClearClick} className="btn btn-primary mx-1">clear</button>
                {clear && <div className="clear">Cleared</div>}
                <button onClick={handleCopyClick} className="btn btn-primary mx-1">Copy</button>
                {notification4 && <div className="notification">Copied to clipboard!</div>}
                <button onClick={handleEmailCopyClick} className="btn btn-primary mx-1">Copy Email</button>
                {email && <div className="email">Email Copied to clipboard!</div>}
                <button onClick={handleRemoveExtrasapcesClick} className="btn btn-primary mx-1">Remove Extra Spaces</button>
                {notification && <div className="notification">Extra spaces removed!</div>}
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p className='fw-bold'><span className="text-success">{text.length === 0 ? '0' : text.split(" ").length}</span> words and <span className="text-success">{text.length === 0 ? '0' : text.length}</span> characters </p>
                <p className='fw-bold'><span className="text-success">{0.008 * text.split(" ").length}</span> minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview here"}</p>
            </div>

        </>
    )
}
