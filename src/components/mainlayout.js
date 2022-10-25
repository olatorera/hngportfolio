import React from "react";
import Torera from "../images/Torera.jpg";

const Mainlayout = () => {
  return (
    <div className="mainlayout">
      <section className="section1">
        <img src={Torera} alt="" id="profile__img" />
        <h3 id="twitter">Olatorera</h3>
        <h3 id="Slack">Torera</h3>
      </section>

      <section className="btn-links">
        <a href="https://training.zuri.team/">
          <button id="btn__zuri">Zuri</button>
        </a>
        <a href="http://books.zuri.team/">
          <button id="books">Zuri Books</button>
        </a>
        <a href="https://books.zuri.team/">
          <button id="book__python">Python Books</button>
        </a>
        <a href="https://background.zuri.team">
          <button id="pitch">Background Code Check</button>
        </a>
        <a href="http://books.zuri.team/">
          <button id="book__design">Zuri Official </button>
        </a>
      </section>
    </div>
  );
};

export default Mainlayout;
