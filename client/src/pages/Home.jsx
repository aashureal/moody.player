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

      <div className="content__part">
        <div className="video__box">
          <img
            src="https://i.pinimg.com/736x/4a/62/15/4a6215c4463f68dbabb3ac0f3996f289.jpg"
            alt=""
          />

          <div className="overlay">
            <h4 className="txt">Detacting...</h4>
            <button className="btn">Detact mood</button>
          </div>
        </div>

        <div className="song__list">
          <h3 className="heading">Recomended songs</h3>

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

      <footer>
        <div className="player">
          <div className="wrapper">
            <div className="poster">
              <img
                src="https://i.pinimg.com/1200x/05/89/86/058986a722436ebf4ee6f3f1bee0497d.jpg"
                alt=""
              />
            </div>
            <div className="info">
              <span className="name">This is Song Name</span>
              <span className="artist">Artist</span>
            </div>
          </div>

          <button className="control__btn">
            <i className="ri-play-large-fill"></i>
          </button>
        </div>

        <div className="mobile__nav">
          <button>
            <i className="ri-home-9-line"></i>
            <span className="txt">Home</span>
          </button>

          <button>
            <i className="ri-add-circle-line"></i>
            <span className="txt">Upload</span>
          </button>

          <button>
            <i className="ri-music-line"></i>
            <span className="txt">Library</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
