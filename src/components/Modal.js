import React from "react";
import { useState } from "react";

const Modal = (props) => {
  const { setShowModal, yapilmasiGerekenIs, title, aciklama } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: 30 /*orjinalde 0, manuel olarak mudahale edildi*/,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "5px",
        }}
      >
        <h1 className="text-center">{title}</h1>
        <p>{aciklama}</p>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-sm btn-outline-danger mx-3"
          >
            Close
          </button>
          <button
            onClick={yapilmasiGerekenIs}
            className="btn btn-sm btn-outline-primary"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
