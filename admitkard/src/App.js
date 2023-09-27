import { useState } from 'react';
import './App.css';
import LoginPage from "./components/LoginPage";
import LoginSuccessfull from './components/LoginSuccessfull';

const App=()=>{
  const [isLogin,setIsLogin]=useState(false)

  const toggleLogin=()=>{
    setIsLogin(!isLogin)
  }
  return(
    <div>
      {!isLogin ? <LoginPage toggleLogin={toggleLogin}/>: <LoginSuccessfull/>}
    </div>
  )
}

export default App;
