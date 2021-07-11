import React from 'react';

export default function DatePickers({inputType, id, placeholder, label, name, value, onChange, required}) {
  return (
    <div>
      <label for="formGroupExampleInput2" class="form-label" style={{color:"#6a6a6a", marginLeft:"10px"}}>{label}</label>
      <input
        type={inputType}
        class="form-control"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}