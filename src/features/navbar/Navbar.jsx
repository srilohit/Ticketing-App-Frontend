import React, { useEffect, useState } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavHeader = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        let authToken = Cookies.get('user');
        // console.log(authToken);
        if(authToken){
            setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false);
        };
    }, []);

    const handleLogout = ()=>{
        Cookies.remove('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                <div className="container-fluid mx-2">
                    <img src="https://th.bing.com/th/id/OIP.BStTim71MEl8-KKURvE8DgAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.5" width={'37px'} height={'37px'} style={{border:'1px solid white', borderRadius:'50%', verticalAlign: 'top'}} alt="" />
                    <a className="navbar-brand text-white mx-2" href="/"><h4>HelpDesk</h4></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link btn btn-secondary text-white  mx-2" aria-current="page" href="/">Home</a>
                            <div>
                                {
                                    isLoggedIn ? ( 
                                        <Link className="nav-link btn btn-secondary text-white mx-2" onClick={handleLogout}>Logout</Link> 
                                    ) : (
                                        <div className="d-flex">
                                            <Link className="nav-link btn btn-secondary text-white mx-2" to={'/login'}>Login</Link> ?
                                            <Link className="nav-link btn btn-secondary text-white mx-2" to={'/signUp'}>SignUp</Link>
                                        </div>
                                    )
                                }
                            </div>
                             
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;