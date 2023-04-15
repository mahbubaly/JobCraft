import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className=''>
                <div className='bg-purple-50'>
                    <h1 className='text-center py-12 text-xl font-semibold '>FAQ</h1>
                </div>

                <div className='p-12 '>
                    <h1 > <span className='font-bold text-xl'>Q1. When you should use content Api?? </span>  </h1>
                    <p className='my-5'> <span className='font-semibold'>Answer: </span> Content APIs can be used in a variety of situations when you need to deliver content to a variety of platforms, devices, and channels. Here are some common scenarios where content APIs are particularly useful: <br />

                        Headless CMS: If you are using a headless content management system (CMS) that separates the content creation and management functionality from the presentation layer, you can use a content API to retrieve and deliver the content to your website or application. <br />

                        Multi-channel content delivery: If you need to deliver content to multiple channels such as websites, mobile apps, digital signage, chatbots, and social media platforms, you can use a content API to serve the same content across all channels. <br />

                        Customized user experiences: If you want to provide personalized content to users based on their preferences, behavior, and location, you can use a content API to retrieve and deliver the relevant content to each user. <br />

                        Third-party integration: If you want to integrate your content with other third-party systems such as analytics, marketing automation, e-commerce, and customer relationship management (CRM) platforms, you can use a content API to exchange data between systems. </p>
                    <h1 > <span className='font-bold text-xl'>Q2. What is custom Hooks?? </span>  </h1>
                    <p className='my-5'> <span className='font-semibold'>Answer: </span> Custom Hooks are a feature in React that allow you to extract reusable logic from a component and encapsulate it into a standalone function. This function can then be shared across multiple components and can help to simplify your code and reduce duplication.

                        A custom hook is a regular JavaScript function that starts with the word "use" (for example, useFetch or useLocalStorage). It can use other React Hooks such as useState, useEffect, useRef, and useContext, as well as other JavaScript features such as closures, destructuring, and default parameters. </p>
                    <h1 > <span className='font-bold text-xl'>Q3. Use Ref?? </span>  </h1>
                    <p className='my-5'> <span className='font-semibold'>Answer: </span>In React, useRef is a hook that allows you to create a mutable reference to a DOM element or to a value that persists between component re-renders. It can be used to access and modify the properties of a DOM element or to store data that does not trigger a re-render. </p>
                    <h1 > <span className='font-bold text-xl'>Q4. Use Memo?? </span>  </h1>
                    <p className='my-5'> <span className='font-semibold'>Answer: </span>In React, useMemo is a hook that allows you to memoize expensive computations so that they are only recomputed when necessary. It can be used to optimize the performance of your application by avoiding unnecessary re-renders. </p>

                </div>

            </div>
        </>
    );
};

export default Blogs;