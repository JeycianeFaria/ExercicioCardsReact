import react from "react";
import "./App.css";
import Card from "./components/Card";
import ComFilhos from "./components/ComFilhos";
import ComParametros from "./components/ComParametros";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
    <h1>Skills</h1>
    <div className="Cards">
      <Card titulo="Card #1">
        <ComParametros titulo="Java" subtitulo="Linguagem de programação"/>
      </Card>
      <Card titulo="Card #2">Git</Card>
      <Card titulo="Card #3">
        <ComFilhos>
          <ul>
            <li>Spring Web</li>
            <li>Spring Data JPA</li>
            <li>Spring Validation</li>
            <li>Spring Security</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="Card #4">React</Card>
      <Card titulo="Card #5">MariaDB</Card>
    </div>
  </div>
);
