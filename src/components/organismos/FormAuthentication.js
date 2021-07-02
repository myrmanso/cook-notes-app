import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../moleculas/Input';
import Button from '../moleculas/Button';

const defaultFormSchema = {
  email: Yup.string()
    .trim()
    .email('Formato inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .trim()
    .min(6, 'Mínimo de 6 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('Campo obrigatório'),
}

const formSchemaLogin = Yup.object().shape({
  ...defaultFormSchema,
  name: Yup.string()
    .trim()
    .min(3, 'Mínimo de 3 caracteres')
    .max(100, 'Máximo de 100 caracteres'),
});

const formSchemaSingup = Yup.object().shape({
  ...defaultFormSchema,
});


const FormAuthentication = ({ handleLoginUser, buttonLabel, isLogin }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleLoginUser(values);
    },
    validationSchema: isLogin ? formSchemaLogin : formSchemaSingup,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-auth">
      {!isLogin && (
        <div className="form-auth__container">
          <label className="form-auth__label">
            nome
          </label>
          <Input
            name="name"
            onChange={formik.handleChange}
            className={`form-auth__input ${formik.errors.name && 'error'}`}
            placeholder=""
            type="text"
            value={formik.values.name}
            onBLur={formik.handleBlur}
            error={formik.errors.name}
          />
        </div>
      )}
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
          name="password"
          onChange={formik.handleChange}
          className={`form-auth__input ${formik.errors.email && 'error'}`}
          placeholder=""
          type="password"
          value={formik.values.password}
          onBLur={formik.handleBlur}
          error={formik.errors.password}
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
