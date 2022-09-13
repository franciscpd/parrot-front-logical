import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "./components/Link";
import { setCredentials } from "../../store";
import { SigninProps } from "../../types/auth";

export default function SignInView() {
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const internalSubmit = ({ email }: SigninProps) => {
    dispatch(setCredentials({
      token: "123456",
      user: {
        email,
        name: "Francis Oliveira",
        apartment: "T 07 AP 47"
      }
    }))
  }

  return (
    <>
      <h1 className="text-black">Login</h1>
      <Formik
        validationSchema={schema}
        onSubmit={internalSubmit}
        validateOnChange
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          apartment: ''
        }}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form className="w-100" noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Input
                name="email"
                type="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={Boolean(touched.email && errors.email)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Input
                name="password"
                type="password"
                placeholder="senha"
                value={values.password}
                onChange={handleChange}
                isInvalid={Boolean(touched.password && errors.password)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" fullWidth>entrar</Button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/signup">Não possui conta? Cadastre-se</Link>
    </>
  );
}