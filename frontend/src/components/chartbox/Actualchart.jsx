import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomizedLabel from './Customizedlabel';

const data = [
  {
    name: '0',
    uv: 75200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Year 1',
    uv: 80000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Year 2',
    uv: 70900,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Year 3',
    uv: 52420,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Year 4',
    uv: 73000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Year 5',
    uv: 86950,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Year 6',
    uv: 71450,
    pv: 4300,
    amt: 2100,
  },
];



export default function Actualchart (){

    return(
         <>
         
         
         <ResponsiveContainer width="100%" height="85%" className="widgetWidth">
          <LineChart data={data}  width="300px">
          { <XAxis datakey="name" stroke="#000000" height={50} />}
          <YAxis type="number"  tickCount="0" axisLine={false} tickLine={false} ticks={['$']} domain={[0, 100000]} label={{ value: 'value($)', angle: -90, position: 'insideLeft' }}  />
            <Line type="monotone" dot={{ fill: 'black' }} dataKey="uv" stroke="#000000" label={<CustomizedLabel/>} />
          </LineChart>
         </ResponsiveContainer>
         
         </>
     )

}