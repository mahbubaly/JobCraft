import React from 'react';
import { getItemData } from '../utils/Fake';
import { useLoaderData } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import AppliedJobCarts from './AppliedJobCarts';


const Apple = () => {
    const savedCarts = getItemData();
    let cart = [];

    const appliedJobs = useLoaderData();



    for (const id in savedCarts) {
        const foundId = appliedJobs.find(appliedJob => (appliedJob.id) == id)
        if (foundId) {
            cart.push(foundId)
        }

    }
    
    return (
        <>
            <div className='bg-purple-50'>
                <h1 className='text-center py-12 text-xl font-semibold '>Applied Jobs</h1>
            </div>
            <div className='p-12'>


                <div className='flex justify-end lg:mr-20'>
                    <h1 className='font-bold p-3  text-xl text-end mr-3'>Filter By  </h1>
                    <ChevronDownIcon className="h-6 w-6 " />
                </div>
                <div className='m-5 '>
                    {
                        cart.map(appleCart => <AppliedJobCarts 
                            key={appleCart.id}
                            appleCart={appleCart}
                            
                            /> )
                    }

                </div>
            </div>
        </>
    );
};

export default Apple;