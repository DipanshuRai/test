import React from 'react';
import Gallery_laptop from './gallery_laptop.jsx';
import Gallery_mobile from './gallery_mobile.jsx';

const Gallery = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <Gallery_laptop />  : <Gallery_mobile/>;
};

export default Gallery;
