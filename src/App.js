import react from "react";
import "./App.css";
import Card from "./components/Card";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="App">
    <h1>Skills</h1>
    <div className="Cards">
      <Card titulo="Card #1">Java</Card>
      <Card titulo="Card #2">Git</Card>
      <Card titulo="Card #3">Spring Boot</Card>
      <Card titulo="Card #4">React</Card>
      <Card titulo="Card #5">MariaDB</Card>
    </div>
  </div>
);
