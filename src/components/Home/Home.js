import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import './Home.css';
import image from '../../Images/sportsMoto.webp';

const Home = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='md:pt-20'>
                    <h1 className='md:text-7xl text-5xl mt-6 font-bold text-indigo-600'>Your best bike</h1>
                    <h1 className='md:text-7xl text-5xl mb-6 font-bold'>Your next bike</h1>
                    <p className='text-lg text-justify md:pl-8 p-2 pt-4'>Riding experience is just out of the world...This bike along with its sibling the GS310 has got the best seats on a single cylinder bike so far, even better than Himalayan which is indeed a comfortable bike to ride...This seats are so well padded and also has got a lot of space... Pillion comfort is also very good...It has got a good ergonomics...Long distance touring are just easy and you won't fell any tiredness even if u take a 2-3 hours continuous ride without any breaks...the bike just goes with it...</p>
                    <button className='border-solid border-0 rounded py-2 m-4 px-4 bg-cyan-50'><span className='text-blue'>Live demo</span></button>
                </div>
                <div>
                    <img src={image} alt="Sports Bike" />
                </div>
            </div>
            <div>
                <CustomerReviews></CustomerReviews>
            </div>
        </div>
    );
};

export default Home;