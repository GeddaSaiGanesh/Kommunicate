import "./index.css";

const LoginSuccessfull = () => {
  return (
    <div className="login-successfull-container">
      <div>
        <img src="/images/successfull" alt="successfull" width="350px" />
      </div>
      <div className="container">
        <div>
          <h1>Welcome to AdmitKard</h1>
          <p>
            In order to provide you with <br />a custom experience,
            <br />
            <span className="para">
            we need to ask you a few questions.
            </span>
          </p>
        </div>
        <div>
          <button className="custom-btn" type="button">
            Get Started
          </button>
          <p>*This will only take 5 min.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessfull;
