import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminPage = ()=>{

    let { username } = useParams();
    const [userTickets , setUserTickets] = useState([]);
    const [ employees, setEmployees] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('')

    useEffect(()=>{
        axios({
            method : 'get',
            url : 'http://localhost:4700/tickets/getAllRaisedTickets'
        }).then((res)=>{
            setUserTickets(res.data);
        });
        axios({
            method : 'get',
            url : 'http://localhost:4700/login/getAllEmployees'
        }).then((res)=>{
            setEmployees(res.data);
        })
    }, []);
    // console.log(selectedEmployeeId);

    const handleAssignEmployee = (alltickets)=>{
        //const updatedTicket = {...alltickets, employee_id : selectedEmployeeId}
        axios({
            method : 'put',
            url : `http://localhost:4700/tickets/updateTicket/${alltickets._id}`,
            data : {employee_id : selectedEmployeeId}
        }).then(()=>{
            alert('ticket assigned');
        })
        // alert(JSON.stringify(updatedTicket));
        // console.log(alltickets.id);
    };

    return(
        <div>
            <h1>Welcome manager { username.toUpperCase() }</h1>
            <table className="table table-striped table-hover w-75 m-3">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Issue</th>
                        <th>Date</th>
                        <th>Select Employee</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    userTickets.map((alltickets)=>{
                        return(
                            <tr>
                                <td>{alltickets.username}</td>
                                <td>{alltickets.issue}</td>
                                <td>{alltickets.date}</td>
                                <td>
                                    <select onChange={(e)=>{setSelectedEmployeeId(e.target.value)}}>
                                        <option value="null" disabled selected>Choose whom to assign</option>
                                        {
                                            employees.map((employee)=>{
                                                return(
                                                    <option value={employee._id} selected={alltickets.employee_id === employee._id}>{employee.username}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                                <td>
                                    <button className="btn btn-dark" onClick={()=>{handleAssignEmployee(alltickets)}}>Assign</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;