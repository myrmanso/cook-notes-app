import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import Input from '../moleculas/Input';
import Button from '../moleculas/Button';
import SearchIcon from '../../assets/icons/search';

const SearchRecipes = ({ handleSearch }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  return (
    <form className="search-recipes" onSubmit={formik.handleSubmit}>
      <div className="search-recipes__container">
        <Button
          className="search-recipes__button"
          type="submit"
        >
          <SearchIcon />
        </Button>
        <Input
          name="name"
          className="search-recipes__input"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.name}
          placeholder="Pesquisar nome da receita"
        />
      </div>
    </form>
  )
};

export default SearchRecipes;
