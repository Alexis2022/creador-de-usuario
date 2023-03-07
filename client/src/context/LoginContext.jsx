import { createContext, useContext, useState, useEffect } from "react";
import { getUserRequest } from "../api/user.api";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin debe estar dentro de LoginContextProvider");
  }
  return context;
};

export const LoginContextProvider = ({ children }) => {

  const [users, setUsers] = useState([]);

  const getRolUser = async () => {
    try {
      const response = await getUserRequest();
      setUsers(response)
    } catch (error) {
      console.log(error);
    }
  };

  const [userLogin, setUserLogin] = useState({ username: "", contraseña: "" });

  

  const LoginUser = () => {
    const navigate = useNavigate();
    return (
      <Formik
        initialValues={userLogin}
        onSubmit={(value) => {
          setUserLogin(value);
          navigate("/home");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              onChange={handleChange}
              value={values.username}
            />
            <label htmlFor="contraseña" className="label">
              Contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              onChange={handleChange}
              value={values.contraseña}
            />
            <button type="submit" className="bt-enviar" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  const validateUser = () => {
    return users.some((user) => {
      return (
        user.username === userLogin.username &&
        user.contraseña === userLogin.contraseña &&
        user.rango === "admin"
      );
    });
  };

  const validateUserName = (validateUsername) => {
    return users.some((user) => {
      return user.username == validateUsername;
    });
  };

  return (
    <LoginContext.Provider
      value={{
        getRolUser,
        users,
        LoginUser,
        userLogin,
        validateUser,
        validateUserName
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
