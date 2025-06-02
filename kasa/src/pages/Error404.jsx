import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Oups ! La page que vous demandez n'existe pas.</p>
      <Link className="not-found__link" to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
