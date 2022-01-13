import react from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className="Card">
    <div className="Header">{props.titulo}</div>
    <div className="Conteudo">{props.children}</div>
  </div>
);