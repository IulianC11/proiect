import React from "react";

function Home() {
  
  return (
    <div className="home">
    
      <div className="top">
        <h3>EXPLORE. DREAM. DISCOVER.</h3>
        <p>Aceasta este un blog de călătorii unde vom împărtăși experiențele noastre.  </p>
        
        
        <img src="https://i.pinimg.com/originals/f2/b2/8a/f2b28ab5301fc74fe8a971d2a2832129.jpg"/>
        <a href="/blog/" className="btnblog">
          <span>BLOG</span>
        </a>
      
      </div>
      <div class="main">
        
  <div class="cards-home">

    <div class="card-home">
        <a href="/blog/" class="button">
        <h1>TRAVEL BLOG</h1>
         <img className="photo-tr " src="https://essenziale-hd.com/wp-content/uploads/2018/06/travel-2.jpg" alt="" />
           
        
        </a>
      
      
    </div>
        
        
    <div class="card-home">
        <a href="/products/" class="button">
       
        <img className="photo-tr " src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/915a8154289969.5955129f65b05.jpg" alt="" />
        <h1>PRODUCTS</h1>
        
        
        </a>
        
      
      
    </div>
  
  
    <div class="card-home">
    <a href="/products/" class="button">
        <h1>ABOUT US</h1>
        <img className="photo-tr " src="https://i.pinimg.com/originals/ef/48/04/ef48049495fb3127e0c759ae4a6ac553.jpg" alt="" />
        
        
        
        </a>
    </div>
  
        
  </div>
</div>
      </div>






      
    
  );
}

export default Home;