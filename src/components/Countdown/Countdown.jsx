import React, { useState, useEffect } from "react";
import classes from "./Countdown.module.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("October 27, 2024 00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timerInterval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const CountdownInfo = ({ value, label }) => {
    const padZero = (value) => (value < 10 ? `0${value}` : value);

    return (
      <div className={classes['countdown-info']}>
        <div className={classes['timer-box']}>
          <div className={classes.sheet}></div>
          <div className={classes['circle-left']}></div>
          <p className={classes.primary}>{padZero(value)}</p>
          <div className={classes['circle-right']}></div>
        </div>
        <p className={classes['sub-heading']}>{label}</p>
      </div>
    );
  };

  return (
    <div className={classes['countdown-container'] + " " + classes.center}>
        <h1 className={classes['h1-heading']}>Get Ready for <div className={classes['entropy-heading']}>ENTROPY 2K24</div></h1>
        <section className={classes['countdown-timer']}>
            <CountdownInfo value={timeLeft.days} label="DAYS" />
            <CountdownInfo value={timeLeft.hours} label="HOURS" />
            <CountdownInfo value={timeLeft.minutes} label="MINUTES" />
            <CountdownInfo value={timeLeft.seconds} label="SECONDS" />
        </section>
    </div>
  );
};

export default Countdown;
