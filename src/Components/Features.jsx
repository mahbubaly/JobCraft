import React from 'react';
import FeaturedCard from './FeaturedCard';

const Features = ({JobFeatures}) => {
    
    return (
        <>
            <div className='text-center my-6 '>
                <h1 className='text-2xl my-3 font-bold '>  <span className='text-primary'>Featured Jobs</span> </h1>
                <p className=' lg:text-center text-left lg:m-0 m-5  text-xl '>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-12 '>
                    {
                        JobFeatures.map((JobFeature) => <FeaturedCard 
                        key={JobFeature.id}
                        JobFeature={JobFeature}
                        
                        />)
                    }
                </div>

            </div>
        </>
    );
};

export default Features;