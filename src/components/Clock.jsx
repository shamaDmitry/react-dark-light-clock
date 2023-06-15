import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { convertToTwoDigit } from '../helpers';

const Clock = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();

      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className={classNames("text-title whitespace-nowrap font-medium")}>
      <span>
        {convertToTwoDigit(time.hours)}<span className="text-5xl mr-2">:</span>
      </span>

      <span>
        {convertToTwoDigit(time.minutes)}<span className="text-5xl mr-2">:</span>
      </span>

      <span className="text-4xl">
        {convertToTwoDigit(time.seconds)}
      </span>

      <span className="text-base">
        {time.hours >= 12 ? ' PM' : ' AM'}
      </span>
    </div>
  );
}

export default Clock;
