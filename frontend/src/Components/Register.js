// import {React,useState,useEffect} from 'react';
// import {useNavigate,Link} from 'react-router-dom';
// import axios from 'axios';

// function Register(){
//     const location=useNavigate()
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     async function submit(e){
//         e.preventDefault();
//         try{
//             await axios.post("http://localhost:8000/register",{email,password})
//             .then((res)=>{
//                 if(res.data=="exist"){
//                     alert("User already exist")
//                 }
//                 else{
//                     location("/login")
//                     console.log("reached")
//                 }
//             })
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
//     return(
//         <div>
//             <form action="POST">
//                 <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
//                 <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
//                 <input type='button' onClick={submit}/>Submit
//             </form>
//             <br>
//             </br>
//             <Link to='/login'>Sign In?</Link>
//         </div>
//     )
// }
// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/register", { email, password })
                .then((res) => {
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else {
                        navigate("/login");
                        console.log("Registration successful");
                    }
                });
        } catch (e) {
            console.log(e);
        }
    }

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={submit}>
                    <TextField 
                        label='Email' 
                        placeholder='Enter email' 
                        fullWidth 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
                        fullWidth 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant="contained" 
                        style={btnStyle} 
                        fullWidth
                    >
                        Sign Up
                    </Button>
                </form>
                <Typography> 
                    Already have an account? 
                    <Link href="/login">
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Register;
