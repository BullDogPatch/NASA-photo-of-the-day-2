import React from "react";
import "./styles.css";
import styled from "styled-components";
import Card from "./components/Card";

const Container = styled.div`
  width: 70%;
  align-items: center;
  margin: auto;
  font-family: sans-serif;
  background-color: floralwhite;
  text-align: center;
  /* color: red; */
  font-weight: bold;
  border: 2px solid lightcoral;
  border-radius: 7px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const H1 = styled.h1`
  font-family: "pangolin";
  color: red;
`;
function App() {
  return (
    <Container>
      <H1>Nasa Photo of the Day</H1>
      <Card />
    </Container>
  );
}
export default App;
