import React, { useState } from "react";

import Accordion from "react-bootstrap/Accordion";

function BankWithdrawals({ handleWithdrawal }) {
    const [withdrawals, setAmountDetails] = useState("");

    const handleChange = (event) => {
        setAmountDetails(event.target.value);
    };

    const handleSubmit = () => {
        handleWithdrawal(withdrawals);
        setAmountDetails("");
    };

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h2>Withdrawal Form</h2>
                    <p>Make a Withdrawal</p>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <input type="number" 
                        style={{
                            backgroundColor: "cyan", 
                            color: "black", 
                            fontWeight: "bold"
                        }}
                        onChange={handleChange} 
                        value={withdrawals} 
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
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BankWithdrawals;