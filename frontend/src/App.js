import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Forgot from "./pages/ForgotPassword/Forgot";
import Seo from "./pages/seo/Seo";
import Notification from "./pages/Notification/Notification";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/notification" element={<Notification />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
