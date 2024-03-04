import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomerPage = ()=>{

    let navigate = useNavigate();
    let { username } = useParams();
    //console.log(username, id);

    return(
        <div className="m-5">
            <h1>Welcome {username.toUpperCase()}</h1>
            <div>
                <button className="btn btn-dark mx-2" onClick={()=>{navigate('toAddTicket')}}>Raise Ticket</button>
                <Link to={'ticketList'}><button className="btn btn-dark mx-2">List of tickets</button></Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CustomerPage;