import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../Hooks/useData';
import './Dashboard.css';

const Dashboard = () => {
    const [d, setData] = useData();
    console.log(d);
    return (
        <div className='w-full h-96 mt-20'>
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
        </div>
    );
};

export default Dashboard;