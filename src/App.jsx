import { useCallback, useState } from "react";
import "./App.css";
function App() {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [dobInput, setDobInput] = useState("");

  const [formDisplay, setFormDisplay] = useState("");

  const handleUsername = (e) => {
    setUsernameInput(e.target.value);
  };
  const handleEmail = useCallback((e) => {
    if (e.target.value.includes("@")) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity(
        `Please include as '@' in the email address. '${e.target.value}' is missing an '@'`
      );
    }
    setEmailInput(e.target.value);
  });

  const handlePhone = (e) => {
    setPhoneInput(e.target.value);
  };

  const handleDob = (e) => {
    setDobInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let nowTime = new Date().getTime();
    let userTime = new Date(dobInput).getTime();
    if (!emailInput.includes(".com")) {
      alert("Invalid email. Please check your email address.");
    } else if (phoneInput.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
    } else if (userTime > nowTime) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      console.log(usernameInput, emailInput, phoneInput, dobInput);
      setUsernameInput("");
      setDobInput("");
      setEmailInput("");
      setPhoneInput("");
    }
  };

  const handleClick = (clickArea) => {
    setFormDisplay(clickArea);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          margin: "50px",
        }}
      >
        <h1>User Details Modal</h1>
        <button onClick={() => handleClick("openForm")}>Open Form</button>
      </div>

      {formDisplay === "openForm" && (
          <div className="modal" >
          <div style={{ display: "flex", justifyContent: "center", height: "100%" }}onClick={(e) => {
            e.stopPropagation();
            setFormDisplay("closeWindow")
          }}>
            <form className="modal-content" onSubmit={(e) => handleSubmit(e)} onClick={(e) => {
            e.stopPropagation();
          }}>
              <h1>Fill Details</h1>
              <label htmlFor="username">
                <h3>Username:</h3>{" "}
              </label>
              <input
                type="text"
                id="username"
                value={usernameInput}
                onChange={(e) => handleUsername(e)}
                required
              />

              <label htmlFor="email">
                <h3>Email Address: </h3>
              </label>
              <input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => handleEmail(e)}
                required
              />

              <label htmlFor="phone">
                <h3>Phone Number:</h3>{" "}
              </label>
              <input
                type="text"
                id="phone"
                value={phoneInput}
                onChange={(e) => handlePhone(e)}
                required
              />

              <label htmlFor="dob">
                <h3>Date of Birth:</h3>{" "}
              </label>
              <input
                type="date"
                id="dob"
                value={dobInput}
                onChange={(e) => handleDob(e)}
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
        
      )}
    </>
  );
}

export default App;
