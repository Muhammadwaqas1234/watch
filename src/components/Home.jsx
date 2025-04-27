import { useState } from "react";
import "../styles/Home.css";
import watch1 from "../assets/image/blue-watch.png";
import watch2 from "../assets/image/orange-watch.png";
import watch3 from "../assets/image/yellow-watch.png";

const watches = [
  { id: 1, name: "Apple Watch", price: "$299", image: watch1, bg: "blue" },
  { id: 2, name: "Samsung Watch", price: "$249", image: watch2, bg: "green" },
  { id: 3, name: "Fitbit Sense", price: "$199", image: watch3, bg: "yellow" },
];

export default function Home({ darkMode }) {
  const [selectedWatch, setSelectedWatch] = useState(watches[0]);

  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>
      <div className={`triangle ${selectedWatch.bg}`}></div>

      <div className="left-section">
        <h1 className="title">Best & smart digital product</h1>
        <p className="description">
          Experience the future of smart accessories with our watches.
        </p>
        <button className="buy-now">Buy Now</button>

        <div className="watch-list">
          {watches.map((watch) => (
            <div
              key={watch.id}
              className={`watch-item ${selectedWatch.id === watch.id ? "active" : ""}`}
              onClick={() => setSelectedWatch(watch)}
            >
              <img src={watch.image} alt={watch.name} />
              <div className="image">
                <p className="watch-name">{watch.name}</p>
                <h4 className="watch-price">{watch.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <img src={selectedWatch.image} alt="Selected Watch" className="selected-watch" />
      </div>
    </div>
  );
}
