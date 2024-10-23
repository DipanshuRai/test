import React from 'react';
import PELE from './PELE.jsx';
import PEPE from './PEPE.jsx';

const PreEvents = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1044);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <PELE/> : <PEPE/>;
};

export default PreEvents;
