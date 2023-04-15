
import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

const Statistics = () => {
    const assignments = useLoaderData();
    console.log(assignments);
    return (
        <>
            <div className='bg-purple-50'>
                <h1 className='text-center py-12 text-xl font-semibold underline '>Seven Assignment marks in Diagram!!</h1>
            </div>

            <div className='flex justify-center mt-6'>

                <ComposedChart width={500} height={400} data={assignments} margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Assignment_number" scale="band" />
                    <YAxis dataKey="Assignment_marks" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Assignment_marks" barSize={30} fill="#413ea0" />
                    <Line type="monotone" dataKey="Assignment_marks" stroke="#ff7300" />
                </ComposedChart>
            </div>





        </>
    );
};

export default Statistics;