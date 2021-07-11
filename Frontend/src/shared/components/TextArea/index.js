import React from "react";

const TextArea = ({ id, placeholder, onChange, value, name, style }) => {
  return (
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder={placeholder}
        id={id}
        style={style}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
      <label for="floatingTextarea2">{placeholder}</label>
    </div>
  );
};

export default TextArea;
