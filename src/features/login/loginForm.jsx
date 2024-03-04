import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './login.css';

const LoginPage = () => {

    let navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            //console.log(values);
            axios({
                method: 'post',
                url: 'http://localhost:4700/login/authenticateLogin',
                data: values,
                withCredentials:true
            }).then((res) => {
                let verify = res.data;
                //console.log(verify);
                if (verify.username === values.username && verify.password === values.password) {
                    if (verify.role === 'customer') {
                        navigate(`/customerDashboard/${verify.username}/${verify._id}`);
                        alert('login successfully');
                        window.location.reload();
                    };
                    if (verify.role === 'employee') {
                        navigate(`/employeeDashboard/${verify.username}/${verify._id}`);
                        alert('login successfully');
                        window.location.reload();
                    }
                    if (verify.role === 'manager') {
                        navigate(`/adminDashboard/${verify.username}/${verify._id}`);
                        alert('login successfully');
                        window.location.reload();
                    };
                }
                else {
                    alert('please check your credentials');
                }
            });
        }
    });

    return (
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
                <form className="" onSubmit={loginForm.handleSubmit}>
                    <h1 className="text-white text-center mb-3">LOGIN</h1>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="username" onChange={loginForm.handleChange} id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput" className="form-label">Username</label>
                    </div>
                    <div class="form-floating mb-1">
                        <input type="password" class="form-control" name="password" onChange={loginForm.handleChange} id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword" className="form-label">Password</label>
                    </div>
                    <Link className="text-decoration-none text-success">Forget password?</Link> <br />
                    <button className="btn btn-light mt-3 w-100">Submit</button>

                    <div className="mt-2 text-white">
                        Don't have account ? <Link className="text-decoration-none text-info" to={'/signUp'}>SignUp now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;