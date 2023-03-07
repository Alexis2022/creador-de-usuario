import { React, useState } from "react";
import { Formik, Form } from "formik";
import { createUserRequest } from "../api/user.api";
import FormUser from "../components/FormUser";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function UserForm() {
  const { validateUserName} = useLogin();

  const [user, setUser] = useState({
    nombre: "",
    contraseña: "",
    username: "",
  });

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={user}
      validate={(values) => {
        const errors = {};
        if (!values.nombre) {
          errors.nombre = "Requirido";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{3,}$/.test(values.nombre)) {
          errors.nombre = "Solo puede contener letras";
        }
        if (!values.contraseña) {
          errors.contraseña = "Requerido";
        } else if (!/^[a-zA-Z0-9_-\W][^\s*$]{7,20}$/.test(values.contraseña)) {
          errors.contraseña =
            "La contraseña no puede tener espacio y debe tener de 8 a 20 digitos";
        } else if (values.contraseña === "12345678") {
          errors.contraseña = "La contraseña es muy facil";
        }
        if (!values.username) {
          errors.username = "Requerido";
        } else if (!/^[a-zA-Z0-9_-]+$/.test(values.username)) {
          errors.username = 'Solo puede contener letras, numeros, "-" y "_"';
        } else if (validateUserName(values.username)) {
          errors.username = "nombre de usuario ya registrado";
        }

        return errors;
      }}
      onSubmit={async (values, actions) => {
        try {
          const response = await createUserRequest(values);
          actions.resetForm();
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        handleBlur,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormUser
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default UserForm;
