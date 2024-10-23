import React from 'react';
import './Navbar.css'; // Ensure your CSS is properly imported
// import 'remixicon/fonts/remixicon.css'; // Import Remixicon CSS

const Navbar = () => {
  return (<div className='toppp'>
    <div id="nav-page" className="nav-site">
      <div className="nav-container">
        <nav >
          <input type="checkbox" id="link" />
          <label htmlFor="link" className="link">
            <img className='nigg' src='https://i.imgur.com/6DIxzlv.png'></img>
            {/* <i className="nav-i menu ri-menu-3-line ri-5px"></i>
            <i className="nav-i close ri-menu-3-line ri-5px"></i> */}
          </label>
          <ul className="submenu">
            {/* <li>
              <a href="#">
                <span>Call</span>
                <i className="ri-phone-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Headphone</span>
                <i className="ri-headphone-line"></i>
              </a>
            </li> */}
            <li>
              <a href="#">
                <span>Gallery</span>
                <i className="">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/007/502/301/small/picture-gallery-image-solid-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" className='img15' alt="" />
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Teams</span>
                <i className="">
                  <img src='https://i.pinimg.com/474x/26/a6/49/26a649922e07cba20e998a1acd1db529.jpg' className='img14'></img>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Sponsors</span>
                <i className="">
                  <img src='data:image/png;base64,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' className='img13'></img>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Events</span>
                <i className="">
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCu4UzZL2GWEcau5xZFeRVvDWILbxAppCaQ&s' className='img12'></img>
                </i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Home</span>
                <i className="">
                <img src="https://i.imgur.com/IosoosV.png " className='img11'></img>
                </i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Navbar;