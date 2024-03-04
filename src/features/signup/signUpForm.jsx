import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignPage = ()=>{

    const navigate = useNavigate();

    const signForm = useFormik({
        initialValues: {
            username: "",
            password: "",
            role : "customer"
        },
        onSubmit: (values) => {
            //console.log(values);
            axios({
                method: 'post',
                url: 'http://localhost:4700/signUp/createAccount',
                data: values
            }).then((res) => {
                alert('register successfully');
                navigate('/login');
            });
        }
    });

    return(
        <div className="d-flex login-form justify-content-around">
            <div className="d-flex">
                <div style={{width: '280px'}}>
                    <h1 className="text-white" style={{fontSize: '70px'}}>Online Ticketing Portal</h1>
                </div>
                <div>
                    <img src="loginpage.png" width={'300px'} height={'300px'} alt="login" />
                </div>
            </div> 

            <div className="w-25">
                <form className="" onSubmit={signForm.handleSubmit}>
                    <h1 className="text-white text-center mb-3">REGISTER</h1>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="username" onChange={signForm.handleChange} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput" className="form-label">Username</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" name="password" onChange={signForm.handleChange} id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword" className="form-label">Password</label>
                    </div>
                    <div className="text-white">
                        Already have an account? <Link className="text-decoration-none text-info" to={'/login'}>Login</Link>
                    </div>
                    <button className="btn btn-light w-100 mt-3">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignPage;