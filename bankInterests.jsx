import React from "react";

import Accordion from "react-bootstrap/Accordion";

function BankInterest({ handleInterest }) {

    const handleSubmit = () => {
        handleInterest();
    };

    const handleDecline = () => {
        alert("Please add accrued interest.");
    }

    return (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Add interest</h2>
                    <p>Add interest. Current Market Rate: 7%</p>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <p>Adding interest?</p>
                        <button 
                        style={{
                            backgroundColor: "darkblue", 
                            color: "white",
                            margin: "15px",
                            borderWidth: "5px",
                            borderColor: "aqua" 
                        }}
                        className="submit-button" 
                        onClick={handleSubmit}>
                            Yes
                        </button>
                        <button 
                        className="decline-button"
                        style={{
                            backgroundColor: "darkblue", 
                            color: "white",
                            borderWidth: "5px",
                            borderColor: "aqua" 
                        }} 
                        onClick={handleDecline}>
                            No
                        </button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BankInterest;