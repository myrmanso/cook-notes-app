import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const MultipleValues = ({ stateUpdateValue, updateFilter, filters }) => {

  const treeData = filters.map(filter => {
    const data = {};

    data.title = 'Todos';
    data.value = stateUpdateValue;
    data.key = stateUpdateValue;

    data.children = filter.values.map(value => ({
      title: value.toLowerCase(),
      value: value,
      key: value,
    }))

    return data;
  });

  const [values, setValues] = useState([stateUpdateValue])

  const onChange = value => {
    updateFilter(value);
    setValues(value);
  };



  const tProps = {
    treeData,
    value: values,
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    }
  };

  return (<TreeSelect {...tProps} />);
};

export default MultipleValues;
