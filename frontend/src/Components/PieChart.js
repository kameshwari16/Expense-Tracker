// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// const PieChart = ({ expenses }) => {
//     const data = {
//         labels: expenses.map(expense => expense.description),
//         datasets: [{
//             data: expenses.map(expense => expense.amount),
//             backgroundColor: [
//                 '#FF6384',
//                 '#36A2EB',
//                 '#FFCE56',
//                 '#4BC0C0',
//                 '#9966FF',
//                 '#FF9F40'
//             ]
//         }]
//     };

//     return (
//         <div>
//             <h3>Expenses Distribution</h3>
//             <Pie data={data} />
//         </div>
//     );
// };

// export default PieChart;



import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Paper } from '@mui/material';

// Register necessary elements with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
    const data = {
        labels: expenses.map(expense => expense.description || 'Uncategorized'),
        datasets: [{
            data: expenses.map(expense => expense.amount),
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', 
                '#4BC0C0', '#9966FF', '#FF9F40'
            ],
        }],
    };

    return (
        <Paper sx={{ p: 2, width: '100%', maxWidth: 500, margin: '0 auto' }}>
            <Pie data={data} />
        </Paper>
    );
};

export default PieChart;
