import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
const Login = () => {
    const [login, setLogin] = useState({});
    const [loginStatus, setLoginStatus] = useState("");

    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/api/admin/admin-login", login)
            .then((response) => {
                console.log(response);
                localStorage.setItem("token", response?.data?.access_token);

                if (response.data.message) {
                    setLoginStatus(response.data.message);
                } else {
                    navigate("/dashboard");
                }
            })
            .catch((error) => {
                console.error("Error during login request:", error);
            });
    };

    return (
        <div className= {classes.loginpage}>
            <div className={classes.login_container}>
                <div className={classes.left_container}>
                    <h1 className={classes.login_heading}>Login</h1>
                    <form onSubmit={handleLogin} className={classes.login_form}>
                        <input
                            onChange={(e) => setLogin({ ...login, username: e.target.value })}
                            className={classes.input_field}
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            onChange={(e) => setLogin({ ...login, password: e.target.value })}
                            className={classes.input_field}
                            type="password"
                            placeholder=" Password"
                        />
                        <div>
                            <a className={classes.forgot} href="/forgot">
                                Forgot Password
                            </a>
                        </div>
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
