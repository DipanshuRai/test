import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img from '../../../../public/assets/Events/img/img1.jpg'
import './Laptop_eventsDay1.css';

const Laptop_eventsDay1 = () => {
  useEffect(() => {
    window.Shery.imageEffect("#back", {
        style: 5,
        config: {
          a: { value: 1.49, range: [0, 30] }, //To edit speed of BG wobble
          b: { value: -0.98, range: [-1, 1] }, //To edit the wobbliness of BG. -1 and 1 = no wobble, 0 = max wobble
          zindex: { value: -9996999, range: [-9999999, 9999999] },
          aspect: { value: 1.8853306276095898 },
          ignoreShapeAspect: { value: true },
          shapePosition: { value: { x: 0, y: 0 } }, // To edit shape of bg img
          shapeScale: { value: { x: 0.5, y: 0.5 } }, // To edit shape of bg img
          shapeEdgeSoftness: { value: 0, range: [0, 0.5] }, // To edit shape of bg img
          shapeRadius: { value: 0, range: [0, 2] }, // To edit shape of bg img
          currentScroll: { value: 0 },
          scrollLerp: { value: 0.07 }, // Reduced for less wobbly scroll
          gooey: { value: true },
          infiniteGooey: { value: true },
          growSize: { value: 1.11, range: [1, 15] }, // To edit the amount upto which wiggly spreads in order to change img, decrease the value to test
          durationOut: { value: 1, range: [0.1, 5] }, //Time it takes for the current img to disappear
          durationIn: { value: 1, range: [0.1, 5] }, //Time it takes for the next image and the wiggly thing around the mouse to appear
          displaceAmount: { value: 0.5 }, 
          masker: { value: true },
          maskVal: { value: 1, range: [1, 5] },
          scrollType: { value: 0 },
          geoVertex: { range: [1, 64], value: 1 },
          noEffectGooey: { value: false }, //To edit if the next image preview that is shown inside the wiggly around mouse also wobbles or not. keep false for smoother transition
          onMouse: { value: 1 },
          noise_speed: { value: 1.59, range: [0, 10] }, //To edit speed of the wiggly around mouse. put value=10 to test
          metaball: { value: 0.21, range: [0, 2], _gsap: { id: 3 } }, //For editing radius of the wiggly thing around mouse, Increase the value to test
          discard_threshold: { value: 0.5, range: [0, 1] },
          antialias_threshold: { value: 0, range: [0, 0.1] }, //For editing the amount of next image visible
          noise_height: { value: 0.5, range: [0, 2] },
          noise_scale: { value: 12.98, range: [0, 100] },
        },
        gooey: true,
      });
      
      var elems = document.querySelectorAll(".elem");
      
      elems.forEach(function (elem) {
        var h1s = elem.querySelectorAll("h1");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
              top: "-100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "100%" });
                animating = false;
              },
            });
            
            index = index === h1s.length - 1 ? 0 : index + 1;
            
            gsap.to(h1s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var imgElems = document.querySelectorAll(".imgElem");

      imgElems.forEach(function (imgElem){
        var imagedivs = imgElem.querySelectorAll("#imagediv");
        var index = 0;
        var animating = false;

        document.querySelector("#main")
        .addEventListener("click", function () {
          if(!animating) {
            animating = true;
            gsap.to(imagedivs[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], {top: "-100%"});
                animating = false;
              },
            });

            index = index === imagedivs.length - 1 ? 0 : index + 1;

            gsap.to(imagedivs[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele2 = document.querySelectorAll(".elem2");
      
      ele2.forEach(function (elem2) {
        var textR1s = elem2.querySelectorAll(".textR1");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR1s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR1s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR1s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele3 = document.querySelectorAll(".elem3");
      
      ele3.forEach(function (elem3) {
        var textR2s = elem3.querySelectorAll(".textR2");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR2s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR2s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR2s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var ele4 = document.querySelectorAll(".elem4");
      
      ele4.forEach(function (elem4) {
        var textR3s = elem4.querySelectorAll(".textR3");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(textR3s[index], {
              top: "100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { top: "-100%" });
                animating = false;
              },
            });
            
            index = index === textR3s.length - 1 ? 0 : index + 1;
            
            gsap.to(textR3s[index], {
              top: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

      var reg = document.querySelectorAll(".register");
      
      reg.forEach(function (register) {
        var registerLinks = register.querySelectorAll(".registerLink");
        var index = 0;
        var animating = false;
      
        document.querySelector("#main")
        .addEventListener("click", function () {
          if (!animating) {
            animating = true;
            gsap.to(registerLinks[index], {
              left: "-100%",
              ease: "expo.inOut",
              duration: 1,
              onComplete: function () {
                gsap.set(this.targets()[0], { left: "100%" });
                animating = false;
              },
            });
            
            index = index === registerLinks.length - 1 ? 0 : index + 1;
            
            gsap.to(registerLinks[index], {
              left: "0%",
              ease: "expo.inOut",
              duration: 1,
            });
          }
        });
      });

  }, []);

  return (
    <div id="main">
      <div id="back">
        <img src="/assets/Events/img/coding.jpg" alt="" />
        <img src="/assets/Events/img/exhibition.jpg" alt="" />
        <img src="/assets/Events/img/gameroom.jpg" alt="" />
        <img src="/assets/Events/img/hackathon.jpg" alt="" />
        <img src="/assets/Events/img/bgmi_valo.jpg" alt="" />
        <img src="/assets/Events/img/quiz.jpg" alt="" />
        <img src="/assets/Events/img/robotics.jpg" alt="" />

      </div>
      <div id="top">
        <div id="workingarea">
          <div id="nav">
            <div id="nleft">
              <img src="logo.png" alt="logo" />
              <a href="/">home</a>
              <a href="/events">events</a>
            </div>
            <div id="nright">
              <a href="/teams">team</a>
              <a href="/sponsors">sponsors</a>
            </div>
          </div>
          <div id="hero">
            <div id="heroleft">
              <div className="elem">
                <h1>CodeThrill 7.0</h1>
                <h1>Tech Exhibition</h1>
                <h1>Game Room</h1>
                <h1>Hackathon</h1>
                <h1>E-Sports</h1>
                <h1>Tech Quiz</h1>
                <h1>Robotics</h1>
              </div>
              <div className="elem">
                <h1>time</h1>
                <h1>time</h1>
                <h1>time</h1>
                <h1>time</h1>
                <h1>time</h1>
                <h1>time</h1>
                <h1>time</h1>
              </div>
              <div className="elem">
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
                <h1>venue</h1>
              </div>

              <button className='register'>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
                <a href="#" className='registerLink'>Register Now</a>
              </button>
            </div>
            <div id="heroright">
              <div className="elem2">
                <p className='textR1'>CodeThrill 7.0</p>
                <p className='textR1'>Tech Exhibition</p>
                <p className='textR1'>Game Room</p>
                <p className='textR1'>Hackathon</p>
                <p className='textR1'>E-Sports</p>
                <p className='textR1'>Tech Quiz</p>
                <p className='textR1'>Robotics</p>
              </div>

              <div className="imgElem">
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
                <div id="imagediv">
                  <img src={img} alt="" />
                </div>
              </div>

              <div className="elem3">
                <p className='textR2'>
                Gear up for a coding showdown! 
                Test your skills, solve complex problems, 
                and race against the clock in CodeThrill 7.0. 
                </p>
                <p className='textR2'>
                Explore the future at our Tech Exhibition!
                Discover innovations, technology, 
                and visionary projects all under one roof.
                </p>
                <p className='textR2'>
                Time to unwind and have some fun!
                Swing by our Game Room, dive into awesome games,
                and hang out with friends. 
                </p>
                <p className='textR2'>
                Get ready to hack, code, and create!
                Join our Hackathon for a day of coding,
                excitement and teamwork.
                </p>
                <p className='textR2'>
                Gear up for the ultimate esports showdown!
                Whether you’re battling it out in Valorant 
                or dropping into BGMI, the competition 
                is fierce and the fun is unbeatable.
                </p>
                <p className='textR2'>
                Think you know tech? 
                Join our Tech Quiz for a chance to showcase 
                your knowledge and compete for the top spot.
                </p>
                <p className='textR2'>
                Get ready for the ultimate robotics face-off!
                Watch as teams bring their robots to life 
                and compete in thrilling challenges.
                </p>
              </div>

              <div className="elem4">
                <p className='textR3'>
                It's time to code, compete, and conquer!
                </p>
                <p className='textR3'>
                Join us and be inspired by tomorrow’s tech today!
                </p>
                <p className='textR3'>
                Let the good times roll!
                </p>
                <p className='textR3'>
                Team up, solve cool problems, and make some awesome stuff.
                </p>
                <p className='textR3'>
                Ready, set, game on!
                </p>
                <p className='textR3'>
                It’s fun, it’s challenging, and it’s your chance to shine.
                </p>
                <p className='textR3'>
                Who will rise to the top?
                </p>
              </div>
              <button className='register'>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
                <a href="/events/preEvents" className='registerLink'>Timeline</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop_eventsDay1;
