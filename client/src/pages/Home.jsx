import React from "react";
import Song from "../components/Song";

const Home = () => {
  return (
    <div className="Home page">
      <header>
        <h1 className="logo">Moody</h1>

        <div className="profile__image">
          <img
            src="https://i.pinimg.com/1200x/a5/b3/76/a5b376e8f3404faca6ea6e2cd9b5da6d.jpg"
            alt=""
          />
        </div>
      </header>

      {/* Content Part */}
      <div className="content__part">
        {/* Sidebar */}
        <div className="sidebar">
          <button className="btn icon__nav__btn">
            <i className="ri-home-9-line"></i>
            <p className="txt">Home</p>
          </button>

          <button className="btn icon__nav__btn">
            <i className="ri-add-circle-line"></i>
            <p className="txt">Upload</p>
          </button>

          <button className="btn icon__nav__btn">
            <i className="ri-music-line"></i>
            <p className="txt">Library</p>
          </button>
        </div>

        {/* Video Box */}
        <div className="video__box">
          <img
            src="https://media.gettyimages.com/id/1286733321/video/curious-cat-on-video-call-paws-at-webcam.jpg?s=640x640&k=20&c=uOgCHsrj6OL2gYKPRkJByl2-1hahekklmkhlT1ek-vc="
            alt=""
          />
          <div className="overlay">
            <p className="txt">Detacting...</p>

            <button className="btn">Detact Mood</button>
          </div>
        </div>

        {/* Song List */}
        <div className="song__list">
          <h2 className="heading">Recommended Songs</h2>
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="mobile__nav">
          <button className="btn icon__nav__btn">
            <i className="ri-home-9-line"></i>
            <p className="txt">Home</p>
          </button>

          <button className="btn icon__nav__btn">
            <i className="ri-add-circle-line"></i>
            <p className="txt">Upload</p>
          </button>

          <button className="btn icon__nav__btn">
            <i className="ri-music-line"></i>
            <p className="txt">Library</p>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
