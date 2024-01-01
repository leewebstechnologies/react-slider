import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FormatQuote } from "@mui/icons-material";
import data from "../../data";
import "./slider.css";

const Slider = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0); //Go back to zero
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>react slider
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          // more stuff coming up
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            person === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FormatQuote className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
