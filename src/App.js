import "./App.css";
import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // const [mystyle, setmystyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  const [Alerter, setAlerter] = useState(null);

  const showMsg = (message, type)=>{
    setAlerter({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlerter(null)
    },1500);
  }
  
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showMsg("Dark mode has beeen enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showMsg("Light mode has beeen enabled", "success");

    }
  }
  

  // const togglestyle = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntxt("Dark Mode");
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtntxt("Light Mode");
  //   }
  // };

  // const [btntxt, setbtntxt] = useState("Dark mode");

  return (
    <>
      {/* style={mystyle} */}
      <div className="main">
        <Navbar
          title="TextUtils"
          abouttxt="About"
          mode={mode}
          toggleFn={toggleMode}
        />
        <Alert alert={Alerter} />
        <div className="container">
          <TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showMsg} />
        </div>
        <About mode={mode} />
        <div className="container">
          <button
            type="button"
            className="btn btn-primary"
            // onClick={togglestyle}
          >
            {/* {btntxt} */}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
