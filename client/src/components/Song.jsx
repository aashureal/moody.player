import React from "react";

const Song = () => {
  return (
    <div className="song">
      <div className="wrapper">
        <span className="count txt">01</span>
        <div className="poster">
          {/* <img
            src="https://i.pinimg.com/1200x/97/fc/6f/97fc6f70cb7bf7eae592684c6b24acf5.jpg"
            alt=""
          /> */}
        </div>
        <p className="info">
          <span className="name txt">This is song name</span>
          <span className="artist txt">this is artist</span>
        </p>
      </div>

      <div className="icon btn">
        <i className="ri-more-fill txt"></i>
      </div>
    </div>
  );
};

export default Song;
