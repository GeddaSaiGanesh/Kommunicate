import OtpInput from "react-otp-input";
import "./index.css";
import { useEffect, useState } from "react";
const OtpVerfiy = (props) => {
  const { toggleLogin,toggleVerfiy } = props;
  const [otp, setOtp] = useState();
  const [count,setCount]=useState(0)
  const [isOtp, setIsOtp] = useState("");
  const randomOtp = require("random-otp-generator");

  useEffect(() => {
    return () => setIsOtp(randomOtp());
  }, [count]);

  const resendHandler = () => {
    setCount(old=>old+1)
  };
  const changeMobileNumber=()=>{
    toggleVerfiy()
  }

  const buttonHandler = () => {
    if (otp === isOtp) {
      toggleLogin();
    }
  };
  return (
    <div className="verfiy-container">
      <div>
        <img src="/images/verfiy" alt="verfiy" />
      </div>

      <div>
        <h1>Please verify Mobile number</h1>
        <h1>An OTP is sent to +917896781234</h1>
        <button className="btn-underline" type="button" onClick={changeMobileNumber}>Change Phone Number</button>
      </div>
      <div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span className="input-field"></span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div>
        <h1>
          Didn’t receive the code?{" "}
          <button className="btn-resend" onClick={resendHandler}>
            Resend
          </button>
        </h1>
        <button type="button" className="custom-btn" onClick={buttonHandler}>
          Verfiy
        </button>
      </div>
      <p>Otp:{isOtp}</p>
    </div>
  );
};

export default OtpVerfiy;
