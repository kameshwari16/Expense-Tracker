// import React from 'react';
// import { useState,useEffect } from 'react';
// import { useNavigate,Link } from 'react-router-dom';
// import axios from "axios";

// function Login(){
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("");
//     const location=useNavigate()
//      async function submit(e){
//         e.preventDefault();
//         try{
//             await axios.post("http://localhost:8000/login",{email,password})
//             .then(res=>{
//                 if(res.data=="exist"){
//                     location("/home",{state:{id:email}})
//                 }
//                 else if(res.data=="not exist"){
//                     alert("User have not sign up")
//                 }
//             })
//             .catch((e)=>{
//                 alert("wrong details")
//                 console.log(e)
//             })
//         }
//         catch(e){
//             console.log(e)
//         }

//     }
//     return(
//         <div>
//             <form action="POST">
//                 <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
//                 <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Paasword'/>
//                 <input type="button" onClick={submit}/>Submit
//             </form>
//             <br></br>
//             <Link to="/">Sign Up?</Link>
//         </div>
//     )
// }

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", { email, password })
                .then(res => {
                    if (res.data === "exist") {
                        navigate("/expense", { state: { id: email } });
                    } else if (res.data === "not exist") {
                        alert("User has not signed up");
                    }
                })
                .catch((e) => {
                    alert("Wrong details");
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
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
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnStyle} 
                    fullWidth 
                    onClick={submit}
                >
                    Sign in
                </Button>
                <Typography>
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="/register">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;


