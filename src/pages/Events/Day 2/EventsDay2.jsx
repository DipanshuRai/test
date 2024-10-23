import React from 'react';
import Laptop_eventsDay2 from './Laptop_eventsDay2.jsx';
import Phone_eventDay2 from './Phone_eventsDay2.jsx';
import './EventsDay2.css';

const EventsDay2 = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1044);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <Laptop_eventsDay2 /> : <Phone_eventDay2 />;
};

export default EventsDay2;
