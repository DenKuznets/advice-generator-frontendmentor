import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice().then(result => {
      // console.log(result);
      setAdvice(result)
    }) 
  }, []);

  async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (response.ok) {
      let json = await response.json();
      return json.slip;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  return <div className="App">{
    advice ? advice.advice : 'asking for advice'
  }</div>;
}

export default App;
