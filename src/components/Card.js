import react from "react";
import './Card.css'



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="Card">
    <div className="Header">{props.titulo}</div>
    {props.children}
  </div>
);