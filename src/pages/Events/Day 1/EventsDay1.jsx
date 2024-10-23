import React from 'react';
import Laptop_eventsDay1 from './Laptop_eventsDay1.jsx';
import Phone_eventDay1 from './Phone_eventDay1.jsx';
import './EventsDay1.css';
import Navbar from '../../../components/Navbar/Navbar.jsx';

const EventsDay1 = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1044);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <Laptop_eventsDay1 />  : <Phone_eventDay1 />;
};

export default EventsDay1;
