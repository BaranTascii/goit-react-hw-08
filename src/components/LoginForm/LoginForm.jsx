import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Giriş Yap</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            E-mail
            <Field type="email" name="email" className={css.input} required />
          </label>

          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              className={css.input}
              required
            />
          </label>

          <button type="submit" className={css.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;