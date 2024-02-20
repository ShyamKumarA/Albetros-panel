import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Layout/Layout";
import Blog from "./pages/Containers/Blog/Blog";
import Login from "./pages/Login/Login";
import Forgot from "./pages/ForgotPassword/Forgot";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/" element={<Blog />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
