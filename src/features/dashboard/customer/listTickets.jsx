import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TicketListPage = ()=>{

    let { id } = useParams();
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios({
            method : 'get',
            url : `http://localhost:4700/tickets/userTickets/${id}`
        }).then((res)=>{
            // console.log(res.data);
            setList(res.data);
        })
    },[]); 
    // console.log(list);

    return(
        <div className="m-3">
            <h1>Your ticket list</h1>
            <ul>
                {
                    list.map((tickets)=>{
                        return(
                            <div>
                                <li>{tickets.issue} &nbsp; {tickets.date}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TicketListPage;