import react from "react";
import "./App.css";
import Card from "./components/Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
    <h1>Linguagens de Programação</h1>
    <div className="Cards">
      <Card titulo="Card #1">Java</Card>
    </div>
  </div>
);
