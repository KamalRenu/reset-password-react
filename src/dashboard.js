import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [count,setCount] = useState(0);
    useEffect(async ()=>{
        try {
            let dashboard = await axios.get("http://localhost:3001/api/private/Authorized",{
                headers : {
                    Authorization : window.localStorage.getItem("auth_token")
                }
            });
            setCount(dashboard.data.data)
        } catch (error) {
            console.log(error);
        }
    })
  return (
    <h1 className="dashboard">Dashboard</h1>
  )
}

export default Dashboard