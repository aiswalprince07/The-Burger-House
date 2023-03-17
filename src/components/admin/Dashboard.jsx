import React from 'react'
import {Link} from "react-router-dom"
import {Doughnut} from "react-chartjs-2";
import Loader from '../layout/Loader';
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from "chart.js";

ChartJS.register(Tooltip,ArcElement,Legend)
const Dashboard = () => {

    const loading =false;

    const Box=({title,value})=>(
        <div>
            <h3>
            {title==="Income" && "₹"}
            {value}
            </h3>
            <p>{title}</p>
        </div>
    );
    const data={
        labels:["Preparing","Shipped","Delivered"],
        datasets:[
        {
            label:"# of orders",
            data:[2,3,4],
            backgroundColor:["rgba(158,65,174,0.1)","rgba(76,65,174,0.2)","rgba(155,0,56,0.3)"],
            borderColor:["rgba(158,65,174)","rgba(76,65,174)","rgba(155,0,56)"],
            borderWidth:1,
        }
        ]
    }
  return (
    <section className="dashboard">
        {
            loading===false?<main>
            <article>
                <Box title="Users" value={213}/>
                <Box title="orders" value={5}/>
                <Box title="income" value={21443}/>
            </article>
            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>
                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>
        </main>:<Loader/>
        }
    </section>
  )
}

export default Dashboard