// import React, { useEffect } from 'react';
// import './WebAndCreatives.css';

// const Card = () => {
//     useEffect(() => {
//         const toggleCard = 'card-toggle';
//         const socialCard = 'card-social';

//         const toggle = document.getElementById(toggleCard);
//         const social = document.getElementById(socialCard);

//         const handleToggleClick = () => {
//             if (social.classList.contains('animation')) {
//                 social.classList.add('down-animation');
//                 setTimeout(() => {
//                     social.classList.remove('down-animation');
//                 }, 1000);
//             }
//             social.classList.toggle('animation');
//         };

//         toggle.addEventListener('click', handleToggleClick);

//         return () => {
//             toggle.removeEventListener('click', handleToggleClick);
//         };
//     }, []); // Empty dependency array ensures this effect runs once after initial render

//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="card__border">
//                     <img src="assets/img/profile-img.png" alt="card image" className="card__img" />
//                 </div>

//                 <h3 className="card__name">Emily Jules</h3>
//                 <span className="card__profession">UI/UX Designer</span>

//                 <div className="card__social" id="card-social">
//                     <div className="card__social-control">
//                         {/* Toggle button */}
//                         <div className="card__social-toggle" id="card-toggle">
//                             <i className="ri-add-line"></i>
//                         </div>

//                         <span className="card__social-text">My social networks</span>

//                         {/* Card social */}
//                         <ul className="card__social-list">
//                             <li>
//                                 <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="card__social-link">
//                                     <i className="ri-facebook-line"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="card__social-link">
//                                     <i className="ri-instagram-line"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="card__social-link">
//                                     <i className="ri-twitter-line"></i>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;
import "./WebAndCreatives.css"; // Ensure this path matches your stylesheet
import CardList from "./CardList"; // Ensure this path matches where your CardList component is located
import ScrambleText from "../../../../components/scramble/Scramble";

function App() {
  return (
    <div className="App">
        <div className="header_wnc">
        <div className="header1_wnc"><ScrambleText className="header1_wnc">Media n Publicity</ScrambleText></div>
        </div>
      <div className="stars">
        <div className="stars1"></div>  
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <div className="bodyCard">
        <CardList />
      </div>
    </div>
  );
}

export default App;
