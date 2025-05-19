import React from "react";
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion";

function BankCharges({ handleCharges }) {

    const handlePayment = () => {
        handleCharges();
    };

    return (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Bank charges</h2>
                    <p>Please deduct charges due</p>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <p>Apply bank charges?</p>
                        <Button variant="success"
                        style={{
                            color: "white", 
                            margin: "25px", 
                            borderWidth: "10px", 
                            backgroundColor: "#3a0ca3",
                            borderColor: "cyan"
                        }} 
                        className="submit-button" onClick={handlePayment}>
                            Pay charges 
                        </Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BankCharges;