import React from "react";
import AuthForm from "./components/AuthForm/AuthForm";
// import ChatWindow from "./components/ChatWindow/ChatWindow";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthForm
                onSignIn={(credentials) => {
                  console.log("sign in", credentials);
                }}
                onStartWithoutAuth={() => {
                  console.log("not auth start");
                }}
              />
            }
          />
          {/* <Route path="/chat">
            <ChatWindow />
          </Route> */}
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
