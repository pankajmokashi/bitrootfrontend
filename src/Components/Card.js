import React, { useState } from "react";
import Modal from "./Modal";

function Card({ item }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreClick = () => {
    setShowModal(true);
  };

  const getDate = (str) => {
    const currentDate = new Date(str * 1000);
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="card">
      <div
        className="card-image"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={item.thumbnail.small} alt="thumbnail"></img>
        {hovered && (
          <div className="hover-text" onClick={handleLearnMoreClick}>
            <span>Learn More</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="circles">
          <span className="circle1"></span>
          <span className="circle2"></span>
        </div>
        <div className="title" onClick={handleLearnMoreClick}>
          {item.title}
        </div>
        <div className="content">{item.content}</div>
        <div className="auther">
          <div className="auther-info">
            <div className="name">{item.author.name}</div>
            <div className="role">{item.author.role}</div>
          </div>
          <div className="card-date">{getDate(item.date)}</div>
        </div>
      </div>
      {showModal && <Modal data={item} onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Card;
