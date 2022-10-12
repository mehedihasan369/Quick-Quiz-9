import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Analytics.css'


const Analytics = () => {
    const topics = useLoaderData();
    console.log(topics.data)
    // const {name,total} = topics.data
    // const data = [{name: `${name}`, uv: {total}, pv: 2400, amt: 2400},];
    // const data = [topics.data];

    return (
        <div className='align-middle'>
            <h1>Here is the statistics</h1>
            <div className='w-75 '>
            <LineChart width={350} height={200} className='chart  ' data={topics.data}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
  </div>
        </div>
    );
};

export default Analytics;