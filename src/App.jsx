import { useEffect, useState } from "react";
import "./App.css";
import { getAdvice } from "./utils";
import {data} from './data'

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    // РАБОЧАЯ API версия
    // getAdvice().then(result => {
    //   setAdvice(result)
    // }) 
    setAdvice(data)
  }, []);  

  return <div className="App">{
    advice ? advice.advice : 'asking for advice'
  }</div>;
}

export default App;
