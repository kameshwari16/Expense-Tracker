// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddExpense from './AddExpense';
// import ExpenseItem from './ExpenseItem';
// import SetBudget from './SetBudget';
// import PieChart from './PieChart';
// const ExpenseList = () => {
//     const [expenses, setExpenses] = useState([]);
//     const [balance, setBalance] = useState(0);
//     const [budget, setBudget] = useState(0);
//     const [showPieChart, setShowPieChart] = useState(false);
//     // <h1>{today}</h1>
//     useEffect(() => {
//         axios.get("http://localhost:8000/expense")
//             .then((res) => {
//                 console.log("Fetched expenses:", res.data);
//                 setExpenses(res.data);
//                 calculateBalance(res.data, budget);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     }, [budget]);

//     const handleOnSaveBudget = (newBudget) => {
//         const numericBudget = parseFloat(newBudget) || 0;
//         console.log("Setting new budget:", numericBudget);
//         setBudget(numericBudget);
//         setBalance(numericBudget);
//         calculateBalance(expenses, numericBudget);
//     };

//     const handleAddExpense = (newExpense) => {
//         setExpenses(prevExpenses => {
//             const updatedExpenses = [...prevExpenses, newExpense];
//             calculateBalance(updatedExpenses, budget);
//             return updatedExpenses;
//         });
//     };

//     const handleOnDelete = (id) => {
//         axios.delete(`http://localhost:8000/expense/${id}`)
//             .then(() => {
//                 setExpenses(prevExpenses => {
//                     const updatedExpenses = prevExpenses.filter(expense => expense._id !== id);
//                     calculateBalance(updatedExpenses, budget);
//                     return updatedExpenses;
//                 });
//             })
//             .catch(e => {
//                 console.log('Error deleting expense:', e);
//             });
//     };

//     const calculateBalance = (expensesList, currentBudget) => {
//         const totalExpenses = expensesList.reduce((total, expense) => total + expense.amount, 0);
//         console.log("Total expenses:", totalExpenses);
//         const newBalance = currentBudget - totalExpenses;
//         console.log("New balance:", newBalance);
//         setBalance(newBalance);
//     };
//     const displayBalance = typeof balance === 'number' ? balance.toFixed(2) : '0.00';
//     const today = new Date();
//     const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
//     return (
//         <div>
//             <p>Today's Date: {formattedDate}</p> {/* Display today's date */}
//             <SetBudget onSaveBudget={handleOnSaveBudget} />
//             <AddExpense onAddExpense={handleAddExpense} />
//             {expenses.map((expense, index) => (
//                 <ExpenseItem key={expense._id || index} expense={expense} onDelete={handleOnDelete} />
//             ))}
//             <h2>Balance: ${displayBalance}</h2>
//             <button onClick={() => setShowPieChart(!showPieChart)}>
//                 {showPieChart ? 'Hide Pie Chart' : 'Generate Pie Chart'}
//             </button>
//             {showPieChart && <PieChart expenses={expenses} />}
//         </div>
//     );
// };

// export default ExpenseList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddExpense from './AddExpense';
import ExpenseItem from './ExpenseItem';
import SetBudget from './SetBudget';
import PieChart from './PieChart';
import "../styles/ExpenseList.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { ClassNames } from '@emotion/react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [budget, setBudget] = useState(0);
  const [showPieChart, setShowPieChart] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/expense")
      .then((res) => {
        setExpenses(res.data);
        calculateBalance(res.data, budget);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [budget]);

  const handleOnSaveBudget = (newBudget) => {
    const numericBudget = parseFloat(newBudget) || 0;
    setBudget(numericBudget);
    setBalance(numericBudget);
    calculateBalance(expenses, numericBudget);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses(prevExpenses => {
      const updatedExpenses = [...prevExpenses, newExpense];
      calculateBalance(updatedExpenses, budget);
      return updatedExpenses;
    });
  };

  const handleOnDelete = (id) => {
    axios.delete(`http://localhost:8000/expense/${id}`)
      .then(() => {
        setExpenses(prevExpenses => {
          const updatedExpenses = prevExpenses.filter(expense => expense._id !== id);
          calculateBalance(updatedExpenses, budget);
          return updatedExpenses;
        });
      })
      .catch(e => {
        console.log('Error deleting expense:', e);
      });
  };

  const calculateBalance = (expensesList, currentBudget) => {
    const totalExpenses = expensesList.reduce((total, expense) => total + expense.amount, 0);
    const newBalance = currentBudget - totalExpenses;
    setBalance(newBalance);
  };

  const displayBalance = typeof balance === 'number' ? balance.toFixed(2) : '0.00';
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return (
    <div className='bg'>
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Expense Tracker
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Today's Date: {formattedDate}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <SetBudget onSaveBudget={handleOnSaveBudget} />
              <Typography variant="h6">Budget: ${budget}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Balance: ${displayBalance}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <AddExpense onAddExpense={handleAddExpense} />
        </Grid>
        {expenses.map((expense, index) => (
          <Grid item xs={12} sm={6} md={4} key={expense._id || index}>
            <ExpenseItem expense={expense} onDelete={handleOnDelete} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowPieChart(!showPieChart)}
        >
          {showPieChart ? 'Hide Pie Chart' : 'Generate Pie Chart'}
        </Button>
        {showPieChart && (
          <Paper sx={{ p: 2, mt: 2 }}>
            <PieChart expenses={expenses} />
          </Paper>
        )}
      </Box>
    </Box>
    </div>
  );
};

export default ExpenseList;
