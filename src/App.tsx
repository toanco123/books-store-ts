import React from "react";
import "./App.css";
import Container from "./components/container/Container";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="flex">
        <Navigation />
        <Container />
      </div>
    </>
  );
}

export default App;
