import { useEffect, useState } from "react";
import "./App.css";
import { getAdvice } from "./utils";
import { data } from "./data";
import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    // РАБОЧАЯ API версия
    // getAdvice().then(result => {
    //   setAdvice(result)
    // })
    setAdvice(data);
  }, []);

  return (
    <div className="App">
      {advice ? (
        <Container>
          <Header adviceId={advice.id} />
          <Main adviceText={advice.advice} />
          <Footer />
        </Container>
      ) : (
        "asking for advice"
      )}
    </div>
  );
}

export default App;
