import { ErrorMessage } from "formik";

function FormUser({ handleBlur, handleChange, values, touched, isSubmitting }) {

    return (
        <div className="form">
            <h2>Registro</h2>
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                name='nombre'
                placeholder='Nombre'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
            />
            {touched.nombre}
            <div className="error">
                <ErrorMessage name="nombre" />
            </div>
            <label htmlFor="contraseña">Contraseña</label>
            <input
                type="password"
                name='contraseña'
                placeholder='Contraseña'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contraseña}
            />
            {touched.contraseña}
            <div className="error">
                <ErrorMessage name="contraseña" />
            </div>

            <label htmlFor="username">Nombre de usuario</label>
            <input
                type="text"
                name="username"
                placeholder='Nombre de usuario'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
            />
            {touched.username}
            <div className="error">
                <ErrorMessage name="username" />
            </div>
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</button>
        </div>
    )
}

export default FormUser