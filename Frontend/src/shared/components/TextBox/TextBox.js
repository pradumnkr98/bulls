import React from 'react';

 function TextBox({inputType, placeholder, label, id, name ,value, onChange, style, required}) {
  return (
    <div>
      <label for="formGroupExampleInput2" class="form-label" style={{color:"#6a6a6a", marginLeft:"10px"}}>{label}</label>
      <input
        name={name}
        type={inputType}
        class="form-control"
        id={id}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required = {required}
      />
    </div>
  );
}

export default TextBox;