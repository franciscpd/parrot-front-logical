import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "./components/Link";

export default function SignUpView() {
  const schema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    apartment: Yup.string().required(),
  });

  const internalSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <h1 className="text-black">Cadastro</h1>
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
        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
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
            <Form.Group className="mb-4">
              <Input
                name="confirmPassword"
                type="password"
                placeholder="confirmar senha"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={Boolean(touched.confirmPassword && errors.confirmPassword)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4">
              <Input
                name="apartment"
                type="text"
                placeholder="unidade/apartamento"
                value={values.apartment}
                onChange={handleChange}
                isInvalid={Boolean(touched.apartment && errors.apartment)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.apartment}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">entrar</Button>
          </Form>
        )}
      </Formik>
      <Link to="/auth/signin">Já possui conta? Entrar</Link>
    </>
  );
}