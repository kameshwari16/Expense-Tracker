import React from "react";
import Layout from "./Layout";

import { Link } from "react-router-dom";
import Banner from "../images/2.png";
import "../styles/Main.css";

const Main = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h2>Managing your expenses is the first step to mastering your money.</h2>
          {/* <p>Best Food In India</p> */}
          <Link to="/login">
            <button>Track Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Main;