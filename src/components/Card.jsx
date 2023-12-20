import React from "react";
import style from  './Card.module.css'

export default function Card (props){
  return (
    <div className={style.container}>
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <h4 className={style.title}>{props.name}</h4>
      <section className={style.section}>
        <p>Min</p>
        <p>{props.min}</p>
      </section>
      <section className={style.section}>
        <p>Max</p>
        <p>{props.max}</p>
      </section>
      <img
        className={style.img}
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="weather image"
      />
    </div>
  );
}