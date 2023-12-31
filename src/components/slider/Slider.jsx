import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import data from "../../data";
import "./slider.css";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // more stuff coming up

          return (
              <article key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FormatQuote className="icon" />
              </article>
          );
        })}
        <button className="prev">
          <ChevronLeft />
        </button>
        <button className="next">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
