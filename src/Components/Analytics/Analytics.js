import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
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
      <ResponsiveContainer width={'100%'} height={200}>
      <LineChart  className='chart  m-4' data={topics.data}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
      </ResponsiveContainer>
  </div>
        </div>
    );
};

export default Analytics;