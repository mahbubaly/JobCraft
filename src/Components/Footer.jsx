import React from 'react';

import { Link } from 'react-router-dom';
import imag1 from '../images/Fb4.png'
import imag2 from '../images/In1.png'
import imag3 from '../images/Tw1.png'

const Footer = () => {
    return (
        <>
            <div className='lg:p-12 p-6 md:grid-cols-2 grid lg:grid-cols-5 grid-cols-1 gap-5 bg-black'>
                <div>
                    <Link className='text-3xl my-5  x font-[italic] text-[purple] md:text-left  ' to="/"><h1><abbr className='no-underline' title="click here to back home">JobCrafters</abbr></h1></Link>

                    <p className='text-white mx-auto my-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='flex lg:justify-center md:justify-center items-center  gap-4 mt-4'>
                        <img className=' w-6 h-6 text-white ' src={imag1} alt="" />
                        <img className='h-6 w-6' src={imag2} alt="" />
                        <img className='h-6 w-6' src={imag3} alt="" />

                    </div>
                </div>
                <div className='text-white mx-auto '>
                    <h1 className='font-semibold' >Company</h1>
                    <p className='my-3'>About Us</p>
                    <p >Work</p>
                    <p className='my-3' >Latest News!</p>
                    <p className='mb-3'>Careers</p>
                </div>
                <div className='text-white mx-auto '>
                    <h1 className='font-semibold' >Product</h1>
                    <p className='my-3'>Prototype</p>
                    <p >Plans & Pricing</p>
                    <p className='my-3' >Customers</p>
                    <p className='mb-3'>Integrations</p>
                </div>
                <div className='text-white mx-auto'>
                    <h1 className='font-semibold' >Support</h1>
                    <p className='my-3'>Help Desk  </p>
                    <p >Sales</p>
                    <p className='my-3' >Become a Partner</p>
                    <p className='mb-3'>Developers</p>
                </div>
                <div className='text-white mx-auto'>
                    <h1 className='font-semibold' >Contact</h1>
                    <p className='my-3'>+44652655210</p>
                    <p >Email: kama@gmail.com</p>

                </div>

            </div>
        </>
    );
};

export default Footer;