import React, { useState, useEffect } from 'react';
import { filterById } from '../../helpers/filterById';
import MultipleValues from '../moleculas/MultipleValues';

const FiltersTemplade = ({ handleFilter, availableFilters }) => {
  const [levelValue, setLevelValue] = useState('Todos')
  const [mealsValue, setMealsValue] = useState('Todos')
  const [flavorValue, setFlavorValue] = useState('Todos')
  const [costValue, setCostValue] = useState('Todos')
  const [occasionValue, setOccasionValue] = useState('Todos')

  useEffect(() => {
    handleFilter({
      meals: mealsValue,
      flavor: flavorValue,
      cost: costValue,
      level: levelValue,
      occasion: occasionValue,
    })
  }, [levelValue, mealsValue, flavorValue, costValue, occasionValue])


  const filterLevel = filterById(availableFilters, 'level');
  const filterMeals = filterById(availableFilters, 'meals');
  const filterFlavor = filterById(availableFilters, 'flavor');
  const filterCost = filterById(availableFilters, 'cost');
  const filterOccasion = filterById(availableFilters, 'occasion');

  return (
    <section className="filter-templade">
      <div className="filter-templade__container">
        <p>Nível</p>
        <MultipleValues filters={filterLevel} stateUpdateName="level" stateUpdateValue={levelValue} updateFilter={setLevelValue} />
      </div>
      <div className="filter-templade__container">
        <p>Refeições</p>
        <MultipleValues filters={filterMeals} stateUpdateName="meals" stateUpdateValue={mealsValue} updateFilter={setMealsValue} />
      </div>
      <div className="filter-templade__container">
        <p>Sabores</p>
        <MultipleValues filters={filterFlavor} stateUpdateName="flavor" stateUpdateValue={flavorValue} updateFilter={setFlavorValue} />
      </div>
      <div className="filter-templade__container">
        <p>{filterCost[0].name}</p>
        <MultipleValues filters={filterCost} stateUpdateName="cost" stateUpdateValue={costValue} updateFilter={setCostValue} />
      </div>
      <div className="filter-templade__container">
        <p>{filterOccasion[0].name}</p>
        <MultipleValues filters={filterOccasion} stateUpdateName="cost" stateUpdateValue={occasionValue} updateFilter={setOccasionValue} />
      </div>
    </section>
  );
};

export default FiltersTemplade;
