import { useEffect } from "react";
import img1 from "./faculty-coordinators.jpg";
import img2 from "./web-creatives.jpeg";
import img3 from "./event-management.jpeg";
import img4 from "./design-team.png";
import img5 from "./sponsor.png";
import img6 from "./public-relation.jpg";
import "./Team.css";
import Button from "../../components/Button/Button";
import Navbar from "../Navbar/Navbar";

const Team = () => {
  useEffect(() => {
    // Initialize Swiper
    var swiper = new window.Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });

    // Cleanup Swiper instance on component unmount
    return () => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
    <Navbar/> 
    <div className="blog-body">
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      {/* <video autoPlay muted loop id="background-video">
        <source src={bg} type="video/webm"/>
        Your browser does not support the video tag.
    </video> */}
      <div className="blog-slider">
        
        <div className="swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img1} alt="Blog Image 1" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Faculty Coordinators</div>
              <div className="blog-slider__text">
                The guiding lights of our fest! They’re the mentors who ensure
                everything runs smoothly, providing support and guidance to make
                our vision a reality.
              </div>
              <a href="/teams/faculty">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img2} alt="Blog Image 2" />
            </div>

            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Web and Creatives Team</div>
              <div className="blog-slider__text">
                The digital heartbeat of the fest, the masterminds behind the
                fest’s digital identity!
              </div>
              <a href="/teams/webAndCreatives">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img3} alt="Blog Image 2" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Event Management Team</div>
              <div className="blog-slider__text">
                Masters of coordination and champions of execution. If it’s
                happening, they’re the ones making it happen!
              </div>
              <a href="/teams/eventManagement">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img4} alt="Blog Image 3" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Media and Publicity</div>
              <div className="blog-slider__text">
                The artistic force behind the fest’s visual identity. They don’t
                just create, they inspire!
              </div>
              <a href="/teams/design">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img5} alt="Blog Image 4" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Sponsorship Team</div>
              <div className="blog-slider__text">
                Powering the fest with partnerships, they’re the go-getters of
                the fest ensuring every collaboration adds value to the event.
              </div>
              <a href="/teams/sponsorship">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={img6} alt="Blog Image 4" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code"></span>
              <div className="blog-slider__title">Public Relations Team</div>
              <div className="blog-slider__text">
                Strategic communicators and buzz creators! They craft the
                perfect narrative to captivate audiences and ensure our event
                gets the attention it deserves. If it’s in the news, they made
                it happen!
              </div>
              <a href="/teams/publicRelations">
                {/* <button className="glow-on-hover">Meet the Team</button> */}
                <Button />
              </a>
            </div>
          </div>
        </div>
        <div className="blog-slider__pagination"></div>
      </div>
    </div>
    </>
  );
};

export default Team;
