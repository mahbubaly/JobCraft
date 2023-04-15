import React from 'react';
import JobCarts from './JobCarts';

const JobCate = ({Jobs}) => {
   
    
    return (
        <>
            <h1 className='mt-12 mb-3 text-center text-2xl font-bold '>Job Category List</h1>
            <h1 className=' lg:text-center text-left lg:m-0 m-5  text-xl '>Explore thousands of job opportunities with all the information you need. Its your future</h1>


            <div className='grid grid-cols-2 lg:grid-cols-4 p-12 text-center justify-center items-center'>
                {
                    Jobs.map((Job) => <JobCarts 
                    key={Job.id} Job={Job}
                    />)
                }
            </div>
            
        </>
    );
};

export default JobCate;