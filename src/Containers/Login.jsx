import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";

const Login = () => {
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form">
          <input className="input" type="text" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src="../assets/static/google-icon.png" /> Inicia sesión con
            Google
          </div>
          <div>
            <img src="../assets/static/twitter-icon.png" /> Inicia sesión con
            Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta
          <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
