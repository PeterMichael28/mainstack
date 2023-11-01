'use client';

import React from 'react';
import {
 YAxis,
 Legend,
 Line,
 LineChart,
 Tooltip,
 ResponsiveContainer,
 XAxis,
} from 'recharts';

const data = [
 { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
 { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
 { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
 { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
 { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
];

const LineChartContainer = () => {
 return (
  <ResponsiveContainer
   width="100%"
   height={270}
  >
   <LineChart
    width={500}
    height={270}
    data={data}
    // margin={{
    //  top: 5,
    //  right: 30,
    //  left: 20,
    //  bottom: 5,
    // }}
   >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    {/* <Legend /> */}
    <Line
     type="monotone"
     dataKey="pv"
     stroke="#d60a0a"
     activeDot={{ r: 8 }}
    />
   </LineChart>
  </ResponsiveContainer>
 );
};

export default LineChartContainer;
