import {NavLink} from "react-router-dom";

export default function NotFound() {
  return (
    <div className="containerError404">
      <h1 className="title404">404</h1>
      <div className="containerParagraph">
        <p>Oups! La page que</p>
        <p>vous demandez n'existe pas</p>
      </div>
      <NavLink to="/" className="errorLink">
        Retournez sur la page d'accueil
      </NavLink>
    </div>
  );
}
