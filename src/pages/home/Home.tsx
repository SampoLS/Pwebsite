import { useRef } from "react";

import "./index.css";

import v2 from "../../assets/videos/v2.mp4";
import poster from "../../assets/images/poster.jpg";

const Home = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startPreview = (): void => {
    const videoEl = videoRef.current;
    videoEl!.muted = true;
    videoEl!.currentTime = 1;
    videoEl!.playbackRate = 1;
    videoEl!.play();
  };
  const stopPreview = (): void => {
    const videoEl = videoRef.current;
    videoEl!.currentTime = 0;
    videoEl!.playbackRate = 1;
    videoEl!.pause();
  };

  return (
    <main className="contents-area">
      <section className="hot-video">
        <h2>
          <a href="/">hot porn videos in united states</a>
        </h2>
        <div className="container">
          <article>
            <div className="video-box">
              <video
                onMouseOver={startPreview}
                onMouseLeave={stopPreview}
                src={v2}
                poster={poster}
                ref={videoRef}
              ></video>
            </div>
            <h5>title</h5>
          </article>
          <article>
            <div className="video-box">
              <video src={v2} poster={poster}></video>
            </div>
            <h5>title</h5>
          </article>
          <article>
            <div className="video-box">
              <video src={v2} poster={poster}></video>
            </div>
            <h5>title</h5>
          </article>
          <article>
            <div className="video-box">
              <video src={v2} poster={poster}></video>
            </div>
            <h5>title</h5>
          </article>
          <article>
            <div className="video-box">
              <video src={v2} poster={poster}></video>
            </div>
            <h5>title</h5>
          </article>
          <article>
            <div className="video-box">
              <video src={v2} poster={poster}></video>
            </div>
            <h5>title</h5>
          </article>
        </div>
      </section>
    </main>
  );
};
export default Home;
