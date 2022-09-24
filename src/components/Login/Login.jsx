import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const validarForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value; // eslint-disable-next-line
    const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "" || password === "") {
      swal(<h2>Email y/o contraseña no pueden ser vacíos!</h2>);
      return;
    }
    if (email !== "" && !regexpEmail.test(email)) {
      swal(<h2>Debes ingresar un correo electrónico válido!</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal(<h2>Credenciales inválidas</h2>);
      return;
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        swal(<h2>Logueado correctamente!</h2>);
        navigate("/listado");
      });
  };
  return (
    <div className="login">
      <h3>Formulario de Login</h3>
      <form onSubmit={validarForm}>
        <label htmlFor="">
          Usuario
          <input
            type="text"
            placeholder="Correo electrónico"
            name="email"
            autoComplete="off"
          />
        </label>
        <label htmlFor="">
          Contraseña
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            autoComplete="off"
          />
        </label>
        <input type="submit" value="Ingresar" />
      </form>
    </div>
  );
};
