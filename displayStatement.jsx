
import BankSavings from "./bankSavings";
import BankWithdrawals from "./bankWithdrawals";
import BankInterest from "./bankInterests";
import BankCharges from "./bankCharges";
import { useState } from "react";

function DisplayStatement() {
    const [balance, setBalance] = useState(0);
    const [interest, setInterest] = useState(false); /* To check for interest */
    const [charges, setCharges] = useState(false); /* To check for bank charges */

    const handleSavings = (amount) => {
        setBalance(prevBalance => prevBalance + parseFloat(amount));
    };

    const handleWithdrawal = (amount) => {
        const newBalance = balance - parseFloat(amount);
        if (newBalance < 0) {
            alert("Insufficient funds");
        } else {
            setBalance(newBalance);
        }
    };

    const handleInterest = () => {
        if (!interest) {
            const interestAmount = balance * 0.07; /* Current market interest rate */
            setBalance(prevBalance => prevBalance + interestAmount);
            setInterest(true);
        }
    };

    const handleCharges = () => {
        if (!charges) {
            setBalance(prevBalance => prevBalance - 50);
            setCharges(true);
        }
    };

    return (
        <>
            <h2>Account Holder Details</h2>
            <h3 style={{color: "white", backgroundColor: "darkblue"}}>Mary Brian</h3>
            <h2>Your account balance is: </h2>
            <h1>£ {balance.toFixed(2)}</h1>
            <h3>GBP</h3>
            <h4>Let's jump start your transaction for today</h4>
            <div id="buttons">
                <BankSavings handleSavings={handleSavings} />
                <BankWithdrawals handleWithdrawal={handleWithdrawal} />
                <BankInterest handleInterest={handleInterest} />
                <BankCharges handleCharges={handleCharges} />
            </div>
        </>
    )
}

export default DisplayStatement;