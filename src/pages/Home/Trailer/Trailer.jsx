import { useEffect } from "react";
import video1 from '../../../../public/assets/video/Rendr.mp4';
import video2 from '../../../../public/assets/video/Sequence_01.mp4';
import video3 from '../../../../public/assets/video/Technology Loop Background.mp4';
import './Trailer.css'

const Trailer = () => {
    useEffect(() => {
        const mediaUrls = [
            video2,
            video1,
            video3
        ];
        
        let currentIndex = 0;
        
        let preloadedVideos = {};
        function preloadVideo(url) {
            if (!preloadedVideos[url]) {
                const video = document.createElement('video');
                video.src = url;
                video.type = 'video/mp4';
                video.preload = 'auto';
                video.style.display = 'none';
                document.body.appendChild(video);
                preloadedVideos[url] = true;
            }
        }
        
        function swapMedia() {
            const mediaContainer = document.getElementById('media-container');
            mediaContainer.innerHTML = '';
            const url = mediaUrls[currentIndex];
            const nextUrl = mediaUrls[(currentIndex + 1) % mediaUrls.length];
            const isImg = /\.(jpg|jpeg|png|gif)$/i.test(url);
            for (let i = 0; i < 1; i++) {
                if (isImg) {
                    const img = document.createElement('img');
                    img.src = url;
                    mediaContainer.appendChild(img);
                } else {
                    const video = document.createElement('video');
                    const source = document.createElement('source');
                    source.src = url;
                    source.type = 'video/mp4';
                    video.autoplay = true;
                    video.muted = true;
                    video.loop = true;
                    video.style.opacity = currentOpacity ;
                    video.appendChild(source);
                    mediaContainer.appendChild(video);
                    preloadVideo(nextUrl);
                }
            }
            currentIndex = (currentIndex + 1) % mediaUrls.length;
        }
        
        let ps5 = document.querySelector(".ps5");
        document.querySelector("#media-container").addEventListener('click', (e)=>{
            e.preventDefault();
            if (ps5.classList.contains("on")) {
                ps5.classList.remove('on');
                currentIndex = 0;
            }
            (currentIndex == 3) ? currentIndex++ : '';
            let vdTarget = document.querySelector("video");
            vdTarget.addEventListener('click',()=>{
              swapMedia();
            })
        });
        ps5.addEventListener('click', ()=>{
              ps5.classList.remove('on');
              currentIndex = 0;
              swapMedia();
      });
      
        
        let currentOpacity = 1;
        document.querySelector("input#opacity").addEventListener("input", (e) => {
          currentOpacity = e.target.value;
          let bgTarget = document.querySelector("video");
          bgTarget.style.opacity = currentOpacity;
        });
        
        
        const d = new Date();
        const hr = d.getHours() % 12 || 12;
        const min = d.getMinutes().toString().padStart(2, '0');
        document.querySelector(".display").innerHTML = `${hr}:${min}`;
        swapMedia();
    })
  return (
    <div className="tr-body">
      <div className="lighting"></div>

      <div className="tr-container">
        <div className="lighting-floor"></div>

        <div className="floor">
          <div>
            <div></div>
          </div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div></div>
        </div>

        <div className="media-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="ps5">
          <div className="base"></div>
          <div className="bottom-2"></div>
          <div className="bottom"></div>
          <div className="middle"></div>
          <div className="glow"></div>
          <div className="top"></div>
        </div>

        <div className="dvr">
          <input
            type="range"
            id="opacity"
            name="volume"
            min="0"
            max="1"
            step="0.01"
          />
          <div className="front">
            <div className="display"></div>
          </div>
        </div>

        <div className="lightbars">
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="sound-system">
          <div className="sys-l">
            <div></div>
            <div></div>
            <div></div>
            <span></span>
          </div>
          <div className="sys-r">
            <div></div>
            <div></div>
            <div></div>
            <span></span>
          </div>
        </div>

        <div id="media-container">
          <video src=""/>
        </div>
      </div>

      <script src="./script.js"></script>
    </div>
  );
};

export default Trailer;