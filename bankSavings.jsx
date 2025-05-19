import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

function BankSavings({ handleSavings }) {
    const [savings, setSavingDetails] = useState("");

    const handleChange = (event) => {
        setSavingDetails(event.target.value);
    };

    const handleSubmit = () => {
        handleSavings(savings);
        setSavingDetails("");
    };

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h2 >Savings Form</h2>
                        <p>Make a Deposit</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <div>
                                <input 
                                    type="number"
                                    style={{
                                        backgroundColor: "cyan", 
                                        color: "black", 
                                        fontWeight: "bold"
                                    }}
                                    onChange={handleChange} 
                                    value={savings} 
                                />
                                <button 
                                    type="submit"
                                    style={{
                                        backgroundColor: "darkblue", 
                                        color: "white",
                                        margin: "15px",
                                        borderWidth: "5px",
                                        borderColor: "aqua" 
                                    }}
                                    onClick={handleSubmit}>
                                        Submit
                                </button>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default BankSavings;