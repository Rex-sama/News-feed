import { useState } from "react";
import Modal from "./Modal"
import "./CSS/Feedback.css"

const Feedback = () => {
  const [flag, setFlag] = useState(false)
  const toggleFeedback = () => {
    setFlag(flag ? false : true)
  }
  return (
    <div className="feedback">
      <h2>Have a Feedback?</h2>
      <button className={flag ? "flagoff" : "flagon"} type="button" onClick={toggleFeedback}> We're Listening!</button>
      {flag ? <Modal />
        : ""}
    </div>
  );
};

export default Feedback;
