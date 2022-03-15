import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="formContainer">
        <div className="formHeader">
          <p>
            <span className="boldText">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </div>

        <div className="form">
          <form>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              autoComplete="off"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              autoComplete="off"
            />
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email Adress"
              autoComplete="off"
            />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
            />

            <button type="submit">Claim Your Free Trial</button>
          </form>

          <p className="formFooter">
            By clicking the button, you are agreeing to our
            <span className="redText"> Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
