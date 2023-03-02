import { useEffect, useState } from "react";
import "./App.css";
import { getAdvice } from "./utils";
import { data } from "./data";
import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";

function App() {
  const [advice, setAdvice] = useState("");
  const theme = {
    desktop: "768px",
  };

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
        <ThemeProvider theme={theme}>
          <Container>
            <Header adviceId={advice.id} />
            <Main theme={theme} adviceText={advice.advice} />
            <Footer />
          </Container>
        </ThemeProvider>
      ) : (
        "asking for advice"
      )}
    </div>
  );
}

export default App;
