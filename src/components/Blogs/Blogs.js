import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div>
                <div className='border-2 p-6 m-10 rounded-lg bg-slate-100'>
                    <h1 className='text-3xl text-cyan-700'>What is context API?</h1>
                    <p><span className='text-xl text-fuchsia-700 mt-2'>Ans:</span> React Context API is a way for React app. It's make global variables thats can be passed around. This is another way to props drilling and moving props from parents to child and child to parent. It's so effective for a developer. It's also so easier to state management using Redux. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
                </div>
                <div className='border-2 p-6 m-10 rounded-lg bg-slate-100'>
                    <h1 className='text-3xl text-cyan-700'>What's the difference between inline block and inline element?</h1>
                    <p><span className='text-xl text-fuchsia-700 mt-2'>Ans:</span> The inline and block elements of HTML are one of the important areas where we often get confused because we are unable to know which are inline and block elements. Difference between Inline and Block elements:
                        <br /><span className='text-blue-400 text-lg'>Inline Elements:</span> <br />
                        Inline elements occupy only sufficient width required. Inline elements don't start in a new line. Inline elements allow other inline elements to sit behind. Inline elements don't have top and bottom margin.
                        <br /> <span className='text-blue-400 text-lg'>Block Elements:</span> <br />
                        Block Elements occupy the full width irrespective of their sufficiency. 	Block elements always start in a line. Block elements doesn't allow other elements to sit behind. Block elements have top and bottom margin.</p>
                </div>
            </div>
            <Link to="/home">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>See our home</button>
            </Link>
            <Link to="/reviews">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>See all reviews</button>
            </Link>
            <Link to="/dashboard">
                <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-200'>See the dashboard</button>
            </Link>
        </div>
    );
};

export default Blogs;