import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetailsCards = ({ SinCard }) => {
    
    const { company, description, Job_Responsibility, Experiences, image, location, full, remote, requirements, salary, title, id, phone, email } = SinCard;

    return (
        <>
            <div className='grid lg:grid-cols-2 grid-cols-1 '>

                <div className='shadow-md p-3 my-4'>
                    <h1> <span className='font-bold'>Description:</span> {description}</h1>
                    <h1 className='my-4'>  <span className='font-bold'>Job Responsibility:</span>
                        {Job_Responsibility}</h1>
                    <p className='mb-5'> <span className='font-bold my-4'>Educational Requirements:</span> {requirements} </p>
                    <p className='mb-5'> <span className='font-bold '>Educational Requirements:</span> {Experiences}</p>
                </div>


                <div>
                    <div className="mx-auto my-4 card flex w-[60%] bg-base-100 rounded-none shadow-sm">

                        <div className="card-body">
                            <h2 className="card-title font-bold">Job details</h2>
                            <p className='text-xl font-semibold'>Salary: {salary}</p>
                            <p className='text-xl font-semibold'>Job title: {title}</p>
                            <h2 className="card-title font-bold mt-4">Contact Information</h2>
                            <p className=' font-semibold'>Phone: {phone}</p>
                            <p className='font-semibold'>Email: {email}</p>




                        </div>

                    </div>

                    <div className='mx-[20%]'>
                        <Link to="/apple"> <button className='btn btn-secondary w-full '>Apple Now</button></Link>
                    </div>

                </div>
            </div>

        </>
    );
};

export default ViewDetailsCards;