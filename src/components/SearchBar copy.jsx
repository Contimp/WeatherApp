import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props){
  return (
    <div>
      <input className={style.input} placeholder="Add City..." />
      <button className={style.button} onClick = {()=> props.onSearch('Searching...')}>Search</button>
    </div>
  );
}