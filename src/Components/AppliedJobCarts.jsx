import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const AppliedJobCarts = ({ appleCart }) => {
    const { company, description, Job_Responsibility, Experiences, image, location, full, remote, requirements, salary, title, id, phone, email } = appleCart;
    console.log(appleCart);

    return (
        <>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 shadow-sm items-center'>
                <div className='flex gap-7 p-4 items-center'>
                    <img className='w-[100px] h-[100px] ' src={image} alt="" />
                    <div>
                        <h1 className='font-semibold mt-5'>{title}</h1>
                        <h1 className='mt-2 text-[16px]'>{company}</h1>
                        <div className='flex gap-6'>
                            <button className='btn btn-secondary my-4'>{full}</button>
                            <button className='btn btn-secondary my-4'>{remote}</button>

                        </div>
                        <div className='flex gap-6 mb-6 font-semibold'>
                            <h1><MapPinIcon className="h-5 w-5 inline "  />  {location}</h1>
                            <p><CurrencyDollarIcon className="h-5 w-5 inline gap-3"  />  {salary}</p>
                        </div>

                    </div>

                </div>
                <div className='flex justify-end md:my-0 my-7 mr-24'>
                    <Link to="/view"><button className='btn btn-secondary'>View Details</button></Link>


                </div>
            </div>

        </>
    );
};

export default AppliedJobCarts;