import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeePage = ()=>{

    const { username, id } = useParams();
    const [assignedTickets, setAssignedTickets] = useState([]);
    
    useEffect(()=>{
        axios({
            method : 'get',
            url : 'http://localhost:4700/tickets/getAllRaisedTickets'
        }).then((res)=>{
            // console.log(res.data);
            let filteredAssignedEmployee = res.data.find((employee)=> employee.employee_id === id);
            // console.log(filteredAssignedEmployee);
            setAssignedTickets([filteredAssignedEmployee]);
        });
    },[]);
    // console.log(assignedTickets);

    const handleIssueSolved = ()=>{
        alert('issue solved');
    };

    return(
        <div>
            <h1>Welcome Employee { username.toUpperCase() }</h1>
            <div className="m-3">
                <table className="table table-striped table-hover w-50">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Issue</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignedTickets.map((ticket)=>{
                                return(
                                    <tr>
                                        <td>{ticket.username}</td>
                                        <td>{ticket.issue}</td>
                                        <td>{ticket.date}</td>
                                        <td>
                                            <button className="btn btn-dark" onClick={handleIssueSolved}>Solved</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeePage;