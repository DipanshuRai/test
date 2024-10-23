import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open
    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 1044);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1044);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Function to toggle the menu
    const toggleMenu = () => {
        isLargeScreen ? setIsOpen(false) : setIsOpen(!isOpen);
    };

    return (
        <nav className="nav_navbar">
            <div className="nav_menu-toggle" onClick={toggleMenu}>
                {isOpen & !isLargeScreen? (
                    <span className="nav_bx-x">✖</span> // Close icon
                ) : (
                    <span className="nav_bx-menu">☰</span> // Menu icon
                )}
            </div>
            <div className={`nav_nav-links ${isOpen || isLargeScreen ? 'nav_show-navbar' : ''}`}>
                <a className='nav-a' href="/">Home</a>
                <a className='nav-a' href="/teams">Team</a>
                <a className='nav-a' href="/events">Events</a>
                <a className='nav-a' href="/sponsors">Sponsor</a>
            </div>
        </nav>
    );
};

export default Navbar;
