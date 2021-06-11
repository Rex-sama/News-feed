import React from 'react'
import "./CSS/Modal.css"

const Modal = () => {
    const onButtonClick = () => {
        window.location.reload()
    }
    return (
        <div className="main-modal">
            <div className="feedback-modal">
                <p>Thank you so much for taking the time</p>
                <p>Please provide the below details!</p>
                <form className="feedback-form">
                    <label >First Name:</label><br />
                    <input type="text" placeholder="John" /><br />
                    <label >Last Name:</label><br />
                    <input type="text" placeholder="Doe" /><br />
                    <label >Address:</label><br />
                    <textarea placeholder="Enter Your Postal Address"></textarea><br />
                    <label >Country:</label><br />
                    <input type="text" placeholder="India" /><br />
                    <label >Email ID:</label><br />
                    <input type="email" placeholder="example@sample.com" /><br />
                    <label >Phone Number:</label><br />
                    <input type="number" /><br />
                    <button onClick={onButtonClick} type='button' id="feedback-button">Submit FeedBack</button><br />
                </form>
            </div>
        </div>
    )
}

export default Modal;
