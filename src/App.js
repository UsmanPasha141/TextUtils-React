import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PagenotFound from "./components/PagenotFound";
import Info from "./components/welcome.js";

function App() {
  // const name = "Usman inside";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // after 2 seconds make it dsable or hide it
    // setTimeout(() => {
    //   setAlert(null);
    // }, 3000);

    // After 3 seconds, start hiding the alert smoothly
    setTimeout(() => {
      // Add the hidden class to start the transition
      document.querySelector(".alert").classList.add("hidden");

      // Remove the alert from the state after the transition duration (0.5s)
      setTimeout(() => {
        setAlert(null);
      }, 500);
    }, 500);
  };

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    // document.body.style.backgroundColor = mode === "dark" ? "white" : "black";
    // document.body.style.color = mode === "dark" ? "white" : "dark";
    if (mode === "dark") {
      document.body.style.backgroundColor = "white"; //black
      // document.body.style.color = "black";
      showAlert("LightMode has been Enabled", "success");
    } else {
      document.body.style.backgroundColor = "#212530"; //black
      // document.body.style.color = "white";
      showAlert("DarkMode has been Enabled", "success");
    }
  };

  return (
    <>
      {/* <NavBar title="TextUtils" aboutText="About Us" /> */}
      {/* here we are pasing the default aboutText */}
      {/* <NavBar /> */}
      {/* <TextForm
        showAlert={showAlert}
        heading="Enter the Text to analyse below :"
        mode={mode}
      /> */}
      <Router>
        {/* This syntex of Switch has been depricated or replaced  
        <Switch>
        Route for home page
        <Route exact path="/">
        <TextForm
        showAlert={showAlert}
        heading="Enter the Text to Analyze Below:"
        mode={mode}
        />
        </Route>
        Route for about page
        <Route path="/about">
        <About />
        </Route>
        </Switch> */}

        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Info />} />

          <Route
            exact
            path="/home"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyze Below:"
                mode={mode}
              />
            }
          />

          <Route exact path="/about" element={<About mode={mode} />} />

          {/* <Route path="*" element={<PagenotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
