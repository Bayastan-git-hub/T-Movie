import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Страница не найдена</h1>
      <p className="not-found__text">
        Такой страницы не существует или она была перемещена.
      </p>
      <Link className="not-found__link" to="/">
        Вернуться на главную
      </Link>
    </section>
  );
}

export default NotFound;
