import React from 'react';
import { Link } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';
import './Dashboard.css';

const Dashboard = () => {
    const [d, setData] = useData();
    console.log(d);
    return (
        <div className='w-full h-96 mt-10'>
            <h1 className='text-2xl text-blue-400 p-5'>Investment VS Revenue</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={d}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            <h1 className='text-2xl text-blue-400 p-5'>Investment VS Revenue</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={d}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <h1 className='text-2xl text-blue-400 p-5'>Investment VS Revenue</h1>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={d}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
            
            <Link to="/home">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>Back to home</button>
            </Link>
        </div>
    );
};

export default Dashboard;