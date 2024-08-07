import React from 'react';
import {useLocation,Link} from 'react-router-dom';
 
function Home(){
    const location=useLocation();
    return(
        <div>
            <h1>Hii {location.state.id}, Welcome to your today's expenses.{Date.now}</h1>
            <Link to="/expense">Track Your Expense</Link>
        </div>
    )
}
export default Home;