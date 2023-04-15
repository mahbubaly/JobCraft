import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);



    return (
        <>
            <div className='  flex justify-around  items-center bg-purple-50 p-4'>
                <div className='md:order-1 order-3'>
                    <Link className='text-3xl font-[italic] text-[purple] inline md:text-left  text-right' to="/"><h1><abbr className='no-underline' title="click here to back home">JobCrafters</abbr></h1></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <XMarkIcon className="h-8 w-10 text-blue-500" /> : <Bars3Icon className="h-8 w-10 text-blue-500" />
                        }
                    </span>

                </div>



                <div className={`md:flex md:order-2 order-1  gap-10 absolute md:static  md:gap-4 font-semibold text-xl ${open ? 'top-16 -left-0 ml-4 ' : '-top-[50%]'}`} >
                    <Link to="/"> <span className='text-primary block md:inline hover:text-purple-500 duration-500'>Home</span></Link>
                    <Link to="/statistics"> <span className='text-primary block md:inline hover:text-purple-500 duration-500'>Statistics</span></Link>
                    <Link to="/apple"> <span className='text-primary block md:inline hover:text-purple-500 duration-500'> Applied Jobs </span> </Link>
                    <Link to="/blog"> <span className='text-primary block md:inline hover:text-purple-500 duration-500'> Blog </span> </Link>
                </div>
                <div className='btn md:order-2 order-2 btn-primary flex lg:m-0 mx-44  lg:justify-end border-none hover:bg-purple-700 text-white'>
                    Star Applying

                </div>
            </div>






        </>
    );
};

export default Header;