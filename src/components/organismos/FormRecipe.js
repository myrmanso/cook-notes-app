import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../moleculas/Input';
import Button from '../moleculas/Button';
import Ancor from '../moleculas/Ancor';


import { availableFilters } from '../../mockAvailableFilters';
import { filterById } from '../../helpers/filterById';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Mínimo de 3 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('Campo obrigatório'),
  description: Yup.string()
    .trim()
    .max(Infinity),
  externalLink: Yup.string()
    .trim()
    .url('Digite uma url válida'),
  imgUrl: Yup.string()
    .trim()
    .url('Digite uma url válida'),
});

const FormRecipes = ({ handleRecipe }) => {
  const filterLevel = filterById(availableFilters, 'level');
  const filterMeals = filterById(availableFilters, 'meals');
  const filterFlavor = filterById(availableFilters, 'flavor');
  const filterOccasion = filterById(availableFilters, 'occasion');

  const formik = useFormik({
    initialValues: {
      name: '',
      externalLink: '',
      imgUrl: '',
      level: '',
      occasion: '',
      meals: '',
      flavor: '',
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
          value={formik.values.name}
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
          value={formik.values.externalLink}
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
          value={formik.values.imgUrl}
          onChange={formik.handleChange}
          onBLur={formik.handleBlur}
          error={formik.errors.imgUrl}
        />
      </div>
      <div className="form-recipe__container--flex">
        <div className="form-recipe__container--checkbox">
          <p>Nível:</p>
          {filterLevel[0].values.map(value => (
            <label className="form-recipe__label">
              <Input
                id={value}
                key={value}
                name="flavor"
                className="form-recipe__input"
                placeholder=""
                type="checkbox"
                value={value}
                checked={formik.values.level}
                onChange={formik.handleChange}
                onBLur={formik.handleBlur}
              />
              {value}
            </label>))}
        </div>
        <div className="form-recipe__container--checkbox">
          <p>Refeição:</p>
          {filterMeals[0].values.map(value => (
            <label className="form-recipe__label">
              <Input
                id={value}
                key={value}
                name="meals"
                className="form-recipe__input"
                placeholder=""
                type="checkbox"
                value={value}
                checked={formik.values.meals}
                onChange={formik.handleChange}
                onBLur={formik.handleBlur}
              />
              {value}
            </label>
          ))}
        </div>
        <div className="form-recipe__container--checkbox">
          <p>Sabor:</p>
          {filterFlavor[0].values.map(value => (
            <label className="form-recipe__label">
              <Input
                id={value}
                key={value}
                name="flavor"
                className="form-recipe__input"
                placeholder=""
                type="checkbox"
                value={value}
                checked={formik.values.flavor}
                onChange={formik.handleChange}
                onBLur={formik.handleBlur}
              />
              {value}
            </label>))}
        </div>
        <div className="form-recipe__container--checkbox">
          <p>Datas comemorativas: </p>
          {filterOccasion[0].values.map(value => (
            <label className="form-recipe__label">
              <Input
                id={value}
                key={value}
                name="occasion"
                className="form-recipe__input"
                placeholder=""
                type="checkbox"
                checked={formik.values.occasion}
                value={value}
                onChange={formik.handleChange}
                onBLur={formik.handleBlur}
              />
              {value}
            </label>))}
        </div>
      </div>
      <div className="form-recipe__container--button">
        <Ancor
          href="/"
        >
          <Button
            className="form-recipe__button"
            type="submit"
          >
            Criar
        </Button>
        </Ancor>
      </div>
    </form >
  );
};

export default FormRecipes;
