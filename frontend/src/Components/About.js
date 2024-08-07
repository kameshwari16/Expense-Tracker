import React from "react";
import Layout from './Layout';
import { Box, Typography } from "@mui/material";
import '../styles/About.css';
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Your Expense Tracker</Typography>
        <p>
        Welcome to Today expense, your go-to solution for managing personal finances with ease. Our expense tracker is designed to help you take control of your budget by providing a simple and intuitive way to monitor your spending, set financial goals, and stay on top of your financial health. Whether you're saving for a big purchase or just want to keep track of where your money is going, our platform offers the tools you need to make informed financial decisions.
        </p>
        <br />
        <p>
        At Today expense, we believe that managing your finances shouldn't be complicated. That's why we've created a user-friendly application that combines powerful features with a clean, easy-to-navigate interface. Our goal is to empower you to achieve financial freedom by giving you the insights and support you need to budget effectively and spend wisely.
        </p>
      </Box>
    </Layout>
  );
};

export default About;