"use client";
import React, { useEffect, useState } from "react";

const DaysCounter = () => {
  const [days, setDays] = useState(0);
  const targetDate = new Date("2024-11-01");

  useEffect(() => {
    const today = new Date();
    const timeDiff = targetDate.getTime() - today.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDays(dayDiff);
  }, [targetDate]);

  return (
    <p className='text-xl mt-4 font-sans text-shadow'>
      {days} Days Left Until D-Day
    </p>
  );
};

export default DaysCounter;
