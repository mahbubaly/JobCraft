import React from 'react';

const JobCarts = ({Job}) => {
    
    const {image,jobCount,id,categoryName} = Job;
    return (
        <>
            <div className='p-3 shadow-sm gap-3 '>
                <img className='w-14 mx-auto my-3' src={image} alt="" />
                <h1 className='text-xl'>{categoryName}</h1>
                <h1>{jobCount} Jobs Available</h1>


            </div>
            
        </>
    );
};

export default JobCarts;