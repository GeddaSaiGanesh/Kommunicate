import { useState } from "react";
import Box from "@mui/material/Box";
import OtpVerfiy from "../OtpVerfiy";
import TextField from "@mui/material/TextField";

import "./index.css";

const LoginPage = (props) => {
  const { toggleLogin } = props;
  const [number, setNumber] = useState("");
  const [isVerfiy, setIsVerfify] = useState(false);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const toggleVerfiy=()=>{
    setIsVerfify(!isVerfiy)
  }

  const OnSubmitHandler = (event) => {
    event.preventDefault()
    toggleVerfiy();
    setNumber('')
  };

  
  const Login = () => {
    return (
      <form className="loginPage-container" onSubmit={OnSubmitHandler} >
        <div className="tittle-conatainer">
          <img src="/images/logo" alt="Logo" />
          <h1>Welcome Back</h1>
          <p>Please sign in to your account</p>
        </div>
        <div>
          <Box>
            <TextField
              id="outlined-controlled"
              label="Phone Number"
              type="tel"
              required 
              inputProps={{
              pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
              title: 'Enter a valid phone number (e.g., 123-456-7890)',
            }}
              value={number}
              onChange={onChangeHandler}
            />
          </Box>
        </div>
        <div>
          <p>We will send you a one time SMS message. Charges may apply.</p>
          <button type="submit" className="custom-btn">
            Sign In With OTP
          </button>
        </div>
      </form>
    );
  };
  return <div>{!isVerfiy ? Login() : <OtpVerfiy toggleLogin={toggleLogin} toggleVerfiy={toggleVerfiy}/>}</div>;
};

export default LoginPage;
