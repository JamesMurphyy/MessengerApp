import React, { useState } from "react";
import Cookies from "universal-cookie";
import Axios from "axios";

import signinImage from "../assets/signup.jpg";

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
