import React from "react";

function Modal({ data, onClose }) {
  return (
    <div className="modal">
      <div className="modal-div">
        <div className="close">
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-image">
          <img
            src={data.thumbnail.large}
            alt="thumbnail"
            style={{ borderRadius: 0 }}
          ></img>
        </div>
        <div className="modal-content">
          <div className="title">{data.title}</div>
          <div className="content">{data.content}</div>
          <div className="auther">
            {data.author.avatar && (
              <div className="avatar">
                <img src={data.author.avatar} alt="avatar" />
              </div>
            )}
            <div className="name">{data.author.name}</div>
            <div className="role">{data.author.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
