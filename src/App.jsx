import React from 'react';
import Trailer from "./pages/Home/Trailer/Trailer";
import Cursor from "./pages/Home/Cursor/Cursor";
import Hero from "./pages/Home/Hero/Hero";
import Merch from "./pages/Home/Merch/Merch";
import Navbar from "./pages/Navbar/Navbar";

function App() {

  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1044);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      {isLargeScreen? (<Cursor/> ) : ("") }
      <Navbar/>
      <Hero />
      {/* <Cursor /> */}
      <Trailer />
      <Merch />
    </>
  );
}

export default App;
