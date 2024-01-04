import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import data, { Cairns } from "./data.jsx";
import SearchBar from "./components/SearchBar.jsx";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.app}>
    <div className={style.bkg}/>
    <div className={style.container}>
    <div>
      <SearchBar onSearch={(ciudad) => alert(ciudad)} />
    </div>
    <div className={style.citiesContainer}>
    <div>
      <Card
      principal
      max={Cairns.main.temp_max}
      min={Cairns.main.temp_min}
      name={Cairns.name}
      img={Cairns.weather[0].icon}
      onClose={() => alert(Cairns.name)}
      />
    </div>
    <div>
      <Cards cities={data} />
    </div>
    </div>
    </div>
    </div>
  );
}
