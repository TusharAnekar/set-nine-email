import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Inbox } from "./pages/Inbox";
import { Home } from "./pages/Home";
import { Sent } from "./pages/Sent";
import { EmailMessage } from "./pages/EmailMessage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/sent" element={<Sent />}></Route>
        <Route path="/inbox/:emailId" element={<EmailMessage />}></Route>
        <Route path="/sent/:emailId" element={<EmailMessage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
