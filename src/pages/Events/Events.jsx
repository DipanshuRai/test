import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "./Events.css";
import Template from "../../components/Events/Template";
import Navbar from "../Navbar/Navbar";
const Events = () => {
  const postActionsControllersRef = useRef([]);
  const likeBtnsRef = useRef([]);

  useEffect(() => {
    // Initialize Swiper
    new Swiper(".swiper", {
      grabCursor: true,
      speed: 400,
      mousewheel: { invert: false },
      scrollbar: { el: ".swiper-scrollbar", draggable: true },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        900: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
      },
    });

    // Event Listener for Post Actions
    const handlePostActionsClick = (btn) => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);

      if (postActionsContent) {
        const isVisible = postActionsContent.getAttribute("data-visible");
        if (isVisible === "false") {
          postActionsContent.setAttribute("data-visible", "true");
          postActionsContent.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        } else {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    };

    postActionsControllersRef.current.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        handlePostActionsClick(btn);
      });
    });

    // Event Listener for Click Outside
    const handleClickOutside = (event) => {
      postActionsControllersRef.current.forEach((btn) => {
        const targetId = btn.getAttribute("data-target");
        const postActionsContent = document.getElementById(targetId);

        if (
          postActionsContent &&
          postActionsContent.getAttribute("data-visible") === "true"
        ) {
          if (
            !postActionsContent.contains(event.target) &&
            event.target !== btn
          ) {
            postActionsContent.setAttribute("data-visible", "false");
            postActionsContent.setAttribute("aria-hidden", "true");
            btn.setAttribute("aria-expanded", "false");
          }
        }
      });
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean-Up
      document.removeEventListener("click", handleClickOutside);
      postActionsControllersRef.current.forEach((btn) => {
        btn.removeEventListener("click", (event) => {
          event.stopPropagation();
          handlePostActionsClick(btn);
        });
      });
    };
  }, []);

  useEffect(() => {
    // Event Listener for Like Buttons
    likeBtnsRef.current.forEach((likeBtn) => {
      likeBtn.addEventListener("click", () => {
        likeBtn.classNameList.toggle("active");
      });
    });

    return () => {
      likeBtnsRef.current.forEach((likeBtn) => {
        likeBtn.removeEventListener("click", () => {
          likeBtn.classNameList.toggle("active");
        });
      });
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <section className="timeline-section">
        <h1 className="text-white">Events</h1>
        <Template name="Pre Events"/>
        <Template name="Day 1"/>
        <Template name="Day 2"/>
      </section>
    </div>
  );
};

export default Events;