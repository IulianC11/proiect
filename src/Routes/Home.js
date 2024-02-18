import React from "react";

function Home() {
  
  return (
    <div className="home">
    
      <div className="top">
        <h3>EXPLORE. DREAM. DISCOVER.</h3>
        <p>Aceasta este un blog de călătorii și vom împărtăși experiențele noastre.  </p>
        <img className="paper" src="https://www.celebration.org/wp-content/uploads/2023/07/divider-upwhite-1536x202.png"/>
        <img className="paper2" src="https://www.celebration.org/wp-content/uploads/2023/07/divider-upwhite-1536x202.png"/>
        <img src="https://r4.wallpaperflare.com/wallpaper/615/107/638/beach-sandy-beach-lagoon-tropical-landscape-wallpaper-88c64d8850f0dce870dc91aeb8e244ca.jpg"/>
        <a href="/blog/" className="blog">
          <span>BLOG</span>
        </a>
      </div>
      <div className="main">
        {/* Aici continuă cu restul conținutului tău */}
      </div>
    </div>
  );
}

export default Home;