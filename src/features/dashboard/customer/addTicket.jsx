import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddTicketPage = ()=>{

    const navigate = useNavigate();

    let {username, id} = useParams();
    // console.log(username, id);
    const ticketForm = useFormik({
        initialValues : {
            issue : '',
            productName : '',
            image : '',
            date : Date.now(),
            username : username,
            id : id
        },

        onSubmit : (values)=>{
            // console.log(values);
            axios({
                method : 'post',
                url : 'http://localhost:4700/tickets/raisedTicket',
                data : values
            }).then(()=>{
                alert('ticket sent successfully');
                navigate(`/customerDashboard/${username}/${id}/ticketList`)
                // console.log(a)
            }).catch(()=>{
                alert('ticket failed');
            });
        }
    });

    return(
        <div className="w-25 m-3">
            <form onSubmit={ticketForm.handleSubmit} className="form-control ">
                <h3>Raise your ticket</h3>
                <label htmlFor="" className="form-label">Issue</label>
                <input className="form-control" type="text" name="issue" id="" onChange={ticketForm.handleChange}/>
                <label htmlFor="" className="form-label">Product Name</label>
                <input className="form-control" type="text" name="productName" id="" onChange={ticketForm.handleChange}/>
                <label htmlFor="" className="form-label">Image</label>
                <input className="form-control" type="text" name="image" id="" onChange={ticketForm.handleChange}/>
                <button className="btn btn-dark my-2">Send Ticket</button>
            </form>
        </div>
    );
};

export default AddTicketPage;