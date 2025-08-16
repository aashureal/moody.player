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
        <div className="sidebar"></div>
        <div className="video__box">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="overlay">
            <p className="txt">Detacting...</p>

            <button className="btn">Detact Mood</button>
          </div>
        </div>
        <div className="song__list">
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
      <footer></footer>
    </div>
  );
};

export default Home;
