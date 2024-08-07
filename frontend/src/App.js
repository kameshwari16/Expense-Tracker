import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import ExpenseList from './Components/ExpenseList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddExpense from './Components/AddExpense';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';


function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/expense" element={<ExpenseList/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          {/* <Route path="/expense" element={<AddExpense/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App;
