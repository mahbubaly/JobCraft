import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../images/F160C5F8-6C7F-48C0-9FE8-20C21246BFA6.png';
import JobCate from './JobCate';
import Features from './Features';

const Section = () => {
    const Jobs = useLoaderData();
    const [JobFeatures, setJobFeatures] = useState([]);
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setJobFeatures(data));
    }, [])




    return (
        <>

            <div className='grid grid-cols-1 md:grid-cols-2  justify-around items-center px-12 pt-12  gap-5 bg-purple-50 '>
                <div className='ml-8 lg:text-left text-center md:order-1 order-2'>
                    <h1 className='text-3xl font-bold font-[italic]'>
                        One Step <br /> Closer To Your <br /> <span className='text-primary'> Dream Job </span>
                    </h1>
                    <p className='text-xl font-white my-6 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary'> Get Started</button>


                </div>
                <div className='flex justify-center lg:justify-end md:order-2 order-1'>
                    <img className=' h-150 w-[50%] md:h-300 md:w-[70%]' src={image} />
                </div>
            </div>
            <JobCate Jobs={Jobs} />
            <Features JobFeatures={JobFeatures} />
            <div className='flex items-center my-5 justify-center'>
                <button className='btn btn-secondary'>Show all</button>
            </div>

        </>
    );
};

export default Section;