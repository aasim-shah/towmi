"use client";

import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-07T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* <h1>Countdown Timer</h1> */}
      <div className='text-white flex flex-row gap-20'>
        <div className='flex flex-col justify-center gap-3 items-center'>
          <span className='md:font-bold md:text-2xl'>{timeLeft.days || '0'}</span> Days
        </div>
        <div className='flex flex-col justify-center gap-3 items-center'>
          <span className='md:font-bold md:text-2xl'>{timeLeft.hours || '0'}</span> Hours
        </div>
        <div className='flex flex-col justify-center gap-3 items-center'>
          <span className='md:font-bold md:text-2xl'>{timeLeft.minutes || '0'}</span> Minutes
        </div>
        <div className=' hidden sm:flex flex-col justify-center gap-3 items-center'>
          <span className='md:font-bold md:text-2xl'>{timeLeft.seconds || '0'}</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
