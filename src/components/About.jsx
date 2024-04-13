import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              My Portfolio
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>You have placed 36 bets till date.</p>
            </div>
            <div>
              <p>Your net worth is +11.8% this year.<br></br>
                No. of bets = 36<br></br>
                Profitable bets = 29<br></br>
                Best Leaderboard position = 1,053<br></br>
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
