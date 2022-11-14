import React from 'react';

const OfferSection = () => {
  return (
    <div className="w-5/6 mx-auto mb-20 bg-blue-600 px-14 py-9 rounded-lg lg:flex justify-between items-center">
      <div className='text-white mr-10'>
        <h1 className='font-bold text-3xl mb-3'>Get our pro offers</h1>
        <p>Create a visual identity for your company, and an <br /> overall brand</p>
      </div>
      <div className='bg-white p-2 rounded flex justify-between mt-8 lg:mt-0'>
        <input className='outline-none lg:px-2' type="text" name="" id="" placeholder='Type your email here' />
        <button className='bg-black text-white px-3 lg:px-6 py-2 rounded lg:ml-10'>Subscribe</button>
      </div>
    </div>
  );
};

export default OfferSection;