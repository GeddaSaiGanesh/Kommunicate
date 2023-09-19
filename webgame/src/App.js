import './App.css';
import UserRegistration from './components/UserRegistration';
import Game from './components/Game';
import { useState } from 'react';

const playerDetails=[{name:"Himanshu",
duration:10,gameLevel:"Hard"},{name:"ramesh",duration:"23",gameLevel:"Hard"}]

function App() {
  const [isLogin,setIsLogin]=useState(false)
  const [playerDetailsList,setPlayerDetailsList]=useState(playerDetails)
  
  const updateplayerDetails=(newPlayerDetails)=>{
    setPlayerDetailsList(old=>[...old,newPlayerDetails])
  }

  const letPlayButton=()=>{
    setIsLogin(old=>!old)
  }
  return (
    <> 
    {isLogin?<Game letPlayButton={letPlayButton} playerDetailsList={playerDetailsList}/>:<UserRegistration updateplayerDetails={updateplayerDetails} letPlayButton={letPlayButton}/>}
    </>
  );
}

export default App;
