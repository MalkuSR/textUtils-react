import React, { useState } from 'react'

export default function About({mode}) {
  let myStyle = {
    color : mode === 'dark'? 'white' :"black",
    backgroundColor: mode === "dark"? "rgb(12 25 36)" : "white"
  }
    return (
        <>
            <div className='container' style={myStyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong>About TextUtils</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Welcome to TextUtils! This application is designed to help you analyze and manipulate text in various ways.
                                Whether you need to count the number of words, characters, or sentences, or convert text to uppercase or lowercase,
                                TextUtils has got you covered. Our goal is to provide a simple and intuitive interface for all your text processing needs.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong >Features</strong> 
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul>
                                    <li>Word Count: Count the number of words in your text.</li>
                                    <li>Character Count: Count the number of characters in your text.</li>
                                    <li>Text Conversion: Convert text to uppercase or lowercase.</li>
                                    <li>Text Analysis: Analyze text for various metrics like sentence count, paragraph count, etc.</li>
                                    <li>Dark Mode: Switch between light and dark modes for a comfortable viewing experience.</li>
                                    <li>Copy Text: Easily copy the entire text to the clipboard.</li>
                                    <li>Copy Email: Extract and copy all email addresses found in the text to the clipboard.</li>
                                    <li>Remove Extra Spaces: Remove unnecessary spaces from the text for a cleaner look.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong >How to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ol>
                                    <li>Enter your text in the input box on the home page.</li>
                                    <li>Choose the operation you want to perform from the available options.</li>
                                    <li>View the results instantly as you type.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong >About the Developer</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is developed by Muhammad Sikandar, a passionate web developer with a keen interest in creating useful and user-friendly web applications.
                                If you have any feedback or suggestions, feel free to reach out!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
