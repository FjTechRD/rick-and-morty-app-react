import axios from "axios";
import React from "react";
import "../styles/cardResident.css";
import { useEffect } from "react";
import { useState } from "react";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="resident__card">
      <header className="resident__header">
        <img src={resident?.image} alt="" />
        <div className="resident__status">
          <div className={`resident__status-circle ${resident?.status}`}></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section className="resident__info">
        <h2 className="resident__name">{resident?.name}</h2>
        <ul>
          <li className="resident__data">
            <span>Specie </span>
            {resident?.species}
          </li>
          <li className="resident__data">
            <span>Origin </span>
            {resident?.origin.name}
          </li>
          <li className="resident__data">
            <span>Episodes </span>
            {resident?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
