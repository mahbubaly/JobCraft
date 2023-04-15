import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/solid'


const Error = () => {
    const { error, status } = useRouteError();
    console.error(error);
    return (
        <div>
            <div className='justify-start text-center items-center mt-6 md:mt-56  '>
                <h1 className='text-3xl font-semibold' >Oops!</h1>
                <p className='text-xl'>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>

                <Link className='font-bold btn btn-secondary mt-3' to="/" > <ChevronDoubleLeftIcon className="h-6 w-6 text-white"  /> <button >Go back home</button></Link>
            </div>
        </div>
    );
};

export default Error;