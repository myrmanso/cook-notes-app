import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../moleculas/Input';
import Button from '../moleculas/Button';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Mínimo de 3 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('Campo obrigatório'),
  externalLink: Yup.string()
    .trim()
    .url('Digite uma url válida')
    .required('Campo obrigatório'),
  imgUrl: Yup.string()
    .trim()
    .url('Digite uma url válida')
    .required('Campo obrigatório'),
});

const FormRecipes = (props) => {
  const { handleRecipe, buttonLabel, name, externalLink, imgUrl } = props;
  const formik = useFormik({
    initialValues: {
      name: '',
      externalLink: '',
      imgUrl: '',
    },

    onSubmit: (values) => {
      handleRecipe(values);
    },
    validationSchema: formSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-recipe">
      <div className="form-recipe__container">
        <label className="form-recipe__label">
          Nome:
          </label>
        <Input
          name="name"
          className={`form-recipe__input ${formik.errors.name && 'error'}`}
          placeholder=""
          type="text"
          onChange={formik.handleChange}
          onBLur={formik.handleBlur}
          value={formik.values.name || name}
          error={formik.errors.name}
        />
      </div>
      <div className="form-recipe__container">
        <label className="form-recipe__label">
          Link da receita:
        </label>
        <Input
          name="externalLink"
          className={`form-recipe__input ${formik.errors.externalLink && 'error'}`}
          placeholder=""
          type="url"
          onBLur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.externalLink || externalLink}
          error={formik.errors.externalLink}
        />
      </div>
      <div className="form-recipe__container">
        <label className="form-recipe__label">
          Link da imagem ou vídeo:
      </label>
        <Input
          name="imgUrl"
          className={`form-recipe__input ${formik.errors.imgUrl && 'error'}`}
          placeholder=""
          type="url"
          value={formik.values.imgUrl || imgUrl}
          onChange={formik.handleChange}
          onBLur={formik.handleBlur}
          error={formik.errors.imgUrl}
        />
      </div>
      <div className="form-recipe__container--button">
        <Button
          className="form-recipe__button"
          type="submit"
        >
          {buttonLabel}
        </Button>
      </div>
    </form >
  );
};

export default FormRecipes;
