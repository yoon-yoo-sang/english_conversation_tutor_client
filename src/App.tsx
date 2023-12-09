import React from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/chat" element={<ChatWindow />} />
            {/* Define other routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
