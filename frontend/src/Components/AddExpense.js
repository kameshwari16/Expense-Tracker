import React, { useState } from 'react';
import axios from 'axios';

function AddExpense({ onAddExpense }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);

    async function submit(e) {
        e.preventDefault();
        try {
            const exp = { description, amount: parseFloat(amount) || 0 };
            const response = await axios.post("http://localhost:8000/expense", exp);
            console.log(response.data);
            onAddExpense(response.data);
            setDescription("");
            setAmount(0);
        } catch (e) {
            console.log("errorrr");
            console.log(e);
        }
    }

    return (
        <div>
            <form action='POST'>
                <input
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
                <input
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value) }} />
            </form>
            <br />
            <button onClick={submit}>Add expense</button>
        </div>
    );
}

export default AddExpense;
