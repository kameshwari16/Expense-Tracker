import React, { useState } from 'react';

const SetBudget = ({ onSaveBudget }) => {
    const [budget, setBudget] = useState('');

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSaveBudget) {
            onSaveBudget(budget);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={budget}
                onChange={handleBudgetChange}
                placeholder="Enter budget"
            />
            <button type="submit">Save Budget</button>
        </form>
    );
};

export default SetBudget;
