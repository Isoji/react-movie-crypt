import React from "react";
import toast from "react-hot-toast";
import "./Buy.scss";

const notify = () =>
  toast("Work in progress..", { style: { background: "#ba9511" } });

const Buy = () => {
  return (
    <button className="buy-button" onClick={notify}>
      Buy Movie
    </button>
  );
};

export default Buy;
