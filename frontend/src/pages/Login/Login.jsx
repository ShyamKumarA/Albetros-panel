import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import classes from "./Login.module.css";

const Login = () => {
    const { login } = useAuth();
    const [loginData, setLoginData] = useState({});
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("https://app.albetros.com/api/admin/admin-login", loginData)
            .then((response) => {
                localStorage.setItem("token", response?.data?.access_token);
                login()
                if (response?.data?.access_token) {
                  
                    navigate("/dashboard");
                    

                }
            })
            .catch((error) => {
                console.error("Error during login request:", error);
                if (error.response.status === 401) {
                    setLoginStatus("Invalid username or password")
                }
            });
    };

    return (
        <div className={classes.loginpage}>
            <div className={classes.login_container}>
                <div className={classes.left_container}>
                    <h1 className={classes.login_heading}>Login</h1>
                    <form onSubmit={handleLogin} className={classes.login_form}>
                        <input
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            className={classes.input_field}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            className={classes.input_field}
                            type="password"
                            placeholder=" Password"
                        />
                        <p style={{ color: "red" }}>{loginStatus}</p>
                        {/* <div>
                            <a className={classes.forgot} href="/forgot">
                                Forgot Password
                            </a>
                        </div> */}
                        <button type="submit" className={classes.signin}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
