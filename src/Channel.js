import React from 'react';

const Channel = ({value, handleValueChange}) => {

  console.log(`Channel: value: ${value}`);

  const updateValue = (newValue) => {
    handleValueChange(newValue);
  };

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ () => updateValue(value + 1) } >+</button>
      <input type="text" className="txt" value={value} onChange={ ({target}) => updateValue(Number(Number.isNaN(target.value) ? target.value : 0)) } />
      <button type="button" className="btn down" onClick={ () => updateValue(value -1 ) } >-</button>
    </div>
  )
};

export default Channel;
