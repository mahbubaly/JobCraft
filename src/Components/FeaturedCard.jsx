import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { addDetails } from '../utils/Fake';

const FeaturedCard = ({ JobFeature }) => {
    

    const { company, description, image, location, full, remote, requirements, salary, title, id } = JobFeature;
    return (
        <div>
            <div className="card w-full bg-purple-50 shadow-xl rounded-none ">
                <div className="card-body">
                    <img className='w-[100px] h-[75px]' src={image} alt="" />
                    <h2 className="card-title">{title}</h2>
                    <h2 className=' text-left '>{location}</h2>
                </div>
                <div className='flex mb-5 px-5 gap-6' >
                    <button className='btn btn-secondary'> {full}</button>
                    <button className='btn btn-secondary'> {remote}</button>
                </div>
                <div className='flex mb-5 px-5 gap-6 text-[18px]' >
                    <div className='flex gap-3'>
                        <MapPinIcon className="h-6 w-6 " />
                        <h1> {location}</h1>
                    </div>
                    <h1>{salary}</h1>
                </div>
                <Link to="/view" className='flex items-start px-4 mb-5'> <button  className='btn btn-secondary  '>View Details</button></Link>







            </div>

        </div>
    );
};

export default FeaturedCard;