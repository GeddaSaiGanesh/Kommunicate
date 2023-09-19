import { useState } from "react";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./index.css";
import PopUP from "../PopUP";


const UserRegistration = (props) => {
  const {updateplayerDetails,letPlayButton}=props
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [gameLevel, setGameLevel] = useState("Easy");
  const [phoneNo, setPhoneNo] = useState("");
  

  const submitHandler = (event) => {
    event.preventDefault();
    PopUP()
    const newPlayerDetails={
      name,
      mail,
      phoneNo,
      gameLevel,
      duration:40
    }

    updateplayerDetails(newPlayerDetails)
    letPlayButton()
    setName('')
    setEmail('')
    setEmail('')
    setPhoneNo('')
  };

  return (
    <div className="main-container">
      <div className="tittle-image-card">
        <img
          src="https://res.cloudinary.com/dn4e2kdbi/image/upload/v1694880452/tittle_ryjjmm.png"
          alt="tittle"
        />
        <h1>Do you think you can survive the <br/><span>Squid Game?</span></h1>
      </div>
      <form onSubmit={submitHandler} className="form-container">
        <Box sx={{ display: "flex", alignItems: "flex-end", py: 2 }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            required
            id="name"
            label="Enter the Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", py: 2 }}>
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="email"
            label="Enter the Email"
            type="email"
            value={mail}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end", py: 2 }}>
          <ContactPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="mobileNo"
            type="tel"
            label="Enter the Mobile No"
            variant="standard"
            value={phoneNo}
            inputProps={{
              pattern: '[0-9]{3}[0-9]{3}[0-9]{4}',
              title: 'Enter a valid phone number (e.g., 123-456-7890)',
            }}      
            onChange={(e) => setPhoneNo(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
        </Box>
        <Box sx={{py:2}}>
          <Select
            id="demo-simple-select-standard-label"
            label="Game"
            value={gameLevel}
            onChange={(e) => setGameLevel(e.target.value)}
            sx={{background:"transpranent"}}
            fullWidth
          >
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{background:'#B82F49', color:'#DCD5DC',px:3,py:1.5,}}>
            Lets Play
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserRegistration;
