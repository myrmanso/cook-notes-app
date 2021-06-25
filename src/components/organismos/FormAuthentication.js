import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../moleculas/Input';
import Button from '../moleculas/Button';

const formSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Formato inválido')
    .required('Campo obrigatório'),
  senha: Yup.string()
    .trim()
    .min(6, 'Mínimo de 6 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('Campo obrigatório'),
});


const FormAuthentication = ({ handleLoginUser, buttonLabel }) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
    },
    onSubmit: (values) => {
      handleLoginUser(values);
    },
    validationSchema: formSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-auth">
      <div className="form-auth__container">
        <label className="form-auth__label">
          e-mail
      </label>
        <Input
          name="email"
          onChange={formik.handleChange}
          className={`form-auth__input ${formik.errors.email && 'error'}`}
          placeholder=""
          type="text"
          value={formik.values.email}
          onBLur={formik.handleBlur}
          error={formik.errors.email}
        />
      </div>
      <div className="form-auth__container">
        <label className="form-auth__label">
          senha
      </label>
        <Input
          name="senha"
          onChange={formik.handleChange}
          className={`form-auth__input ${formik.errors.email && 'error'}`}
          placeholder=""
          type="password"
          value={formik.values.senha}
          onBLur={formik.handleBlur}
          error={formik.errors.senha}
        />
      </div>
      <div className="form-auth__container--button">
        <Button
          className="form-auth__button"
          type="submit"
        >
          {buttonLabel}
        </Button>
      </div>
    </form >
  );
};

export default FormAuthentication;
