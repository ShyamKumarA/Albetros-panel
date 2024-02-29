import axios from "axios";
import React, { useState } from "react";
import classes from './Forgot.module.css'
import { useNavigate } from "react-router-dom";
const Forgot = () => {
    const [userDatails, setUserDatails] = useState({});
    const navigate = useNavigate()


    const handlesubmit = (e) => {
        e.preventDefault()

        axios.post("https://app.albetros.com/api/admin/forgot-password", userDatails)
            .then((response) => {
                console.log(response);


                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Error during login request:", error);
            });
    }

    return (
        <div className={classes.reset_page}>
            <div className={classes.reset_container}>

                <h1 className={classes.register_heading}>Reset Your Password</h1>
                <form onSubmit={handlesubmit} className={classes.login_form}>
                    <input
                        onChange={(e) => setUserDatails({ ...userDatails, email: e.target.value })}
                        className={classes.input_field}
                        type="text"
                        placeholder="username"
                    />

                    <input
                        onChange={(e) =>
                            setUserDatails({ ...userDatails, newPassword: e.target.value })
                        }
                        className={classes.input_field}
                        type="password"
                        placeholder="NewPassword"
                    />
                    {/* <input
                        onChange={(e) =>
                            setUserDatails({
                                ...userDatails,
                                confirmPassword: e.target.value,
                            })
                        }
                        className={classes.input_field}
                        type="password"
                        placeholder=" Confirm Password"
                    /> */}

                    <button type="submit" className={classes.reset_btn}>
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgot;
