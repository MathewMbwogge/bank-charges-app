import React from "react";
import "./index.css";

import SavingsInput from "./UserSavings";
import WithdrawalInput from "./UserWithdrawals";

import { useState } from "react";

function DisplayInfo() {
    const [details, setDetails] = useState({
        saving: "",
        withdrawal: "",
        firstname: "",
        lastname: "",
        updateBalance: ""
    });

    let balance = 1000;
    let saving = details.saving;
    let withdrawal = details.withdrawal;
    let value = details.value;

    const updateBalance = () => {
        if(saving >= 0) {
            balance += value;
        }
        if(withdrawal >=0) {
            balance -= withdrawal;
        
            if(balance===0) {
                return "Your account is out of funds";
            } else if(balance < withdrawal) {
                return "Insufficient balance";
            } else {
                return balance-withdrawal;
            }
        }
    }

    const handleChange = (event) => {
        setDetails((prev => ({...prev, [event.target.name]: event.target.value})))
    };

    const handleSubmit = (event) => {
        event.preventDefault(); {/* To prevent default of the page when button is clicked*/}

        console.log(details);
    };

    return (
        <div className="root-container">
            <div>
                <SavingsInput name={details} 
                handleChange={handleChange} 
                />
                <div>value={details.saving}</div>
                <div className="savings">
                    <button id="savings-button" onClick={handleSubmit} >Submit</button>
                </div>
            </div>
            <br />
            <div className="withdrawal-container">
{/*                 <form action="">
                    <div>
                        <label htmlFor=""></label>
                        <h3>Withdrawal Form</h3>
                        <input type="text"
                        onChange={handleChange}
                        placeholder="Enter Amount"
                        name = "withdrawal" />
                        <div>value={details.withdrawal}</div>
                    </div>
                    <div>
                    <p className="Balance">Balance: {updateBalance()}</p>
                        <label htmlFor=""></label>
                        <input type="text"
                        onChange={handleChange}
                        placeholder="Enter First Name" 
                        name = "firstname" />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        < input type="text"
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        name = "lastname" />
                    </div>
                    <button onClick={handleSubmit} >Submit</button>
                </form> */}
                <WithdrawalInput name={details}
                handleChange={handleChange} 
                />
                <div>value={details.withdrawal}</div>
                <div>
                    <button id="withdrawals-button" onClick={handleSubmit}>Submit</button>
                </div>
                <p className="Balance">Balance: {updateBalance()}</p>
            </div>
        </div>
    )
 }

 export default DisplayInfo;

/*     return (
        <div>
          <div>
            <Welcome name={details} />
            <div className="saving">
            <SavingsInput name={details} handleChange={handleChange} />
            <div>value={details.saving}</div>
            </div>
            <UserDetails name={details} handleChange={handleChange} />
            <button onClick={handleSubmit} >Submit</button>
          </div>
          <div>
            <WithdrawalInput name={details} handleChange={handleChange} />
            <div>value={details.withdrawal}</div>
          </div>
          <div>
            <p className="Balance">Balance: {updateBalance()}</p>
            <UserDetails name={details} handleChange={handleChange} />
            <button onClick={handleSubmit} >Submit</button>
          </div>
        </div>
    ) */
 