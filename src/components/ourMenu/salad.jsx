
import React from "react";
import "./salad.css";

const salad = () => {
  const images = [
    "https://images.unsplash.com/photo-1551218808-94e220e084d2",//1
    "https://i.pinimg.com/736x/8c/24/3c/8c243cc8e49925b96f1cac71cd39de6d.jpg",//2
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",//3
    "https://i.pinimg.com/736x/dc/28/88/dc2888e97227629eb7ae9528866a9451.jpg",//4
    "https://i.pinimg.com/736x/85/6c/38/856c388c5042c09d20418b05f2f810bb.jpg",//5
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",//6
    "https://i.pinimg.com/736x/97/4e/37/974e372c6e73ab55e429a6d7d13a6b8e.jpg",//7
    "https://i.pinimg.com/736x/9a/dd/10/9add109efd3b1707ccebc7334ca61220.jpg",//8
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",//9
    "https://i.pinimg.com/736x/4e/78/b6/4e78b67c9cf355bc35247908f44f0d5d.jpg",//10
    "https://i.pinimg.com/1200x/3f/b1/8a/3fb18a247502f484df3e599421c5bfe5.jpg",//11
    "https://i.pinimg.com/1200x/cb/e3/1f/cbe31fe7aa10d5a5d249d56ac5f78219.jpg",//12
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",//13
    "https://i.pinimg.com/1200x/b5/d0/1b/b5d01bccf8f2d2e2b865e8fd623e00d2.jpg",//14
    "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"//15
    
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">🥗 Fresh Salad Collection</h1>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`Salad ${index + 1}`} className="gallery-image" />
            <div className="gallery-overlay">
              <p>Salad {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default salad;
