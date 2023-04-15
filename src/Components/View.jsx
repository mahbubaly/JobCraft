import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getItemData } from '../utils/Fake';
import ViewDetailsCards from './ViewDetailsCards';


const View = () => {


    const ViewData = useLoaderData();
    let cart = [];


    const SaveCard = getItemData()
    for (const id in SaveCard) {
        const foundId = ViewData.find(singleData => (singleData.id) == id)
        if (foundId) {
            cart.push(foundId)
        }

    }
    

    return (
        <>
            <div className='bg-purple-50'>
                <h1 className='text-center py-12 text-xl font-semibold '>Job Details</h1>
            </div>
            <div className=' p-12  gap-3'>
                {
                    cart.map(SinCard => <ViewDetailsCards
                        SinCard={SinCard}
                        key={SinCard.id}
                    />)
                }

            </div>
        </>
    );
};

export default View;