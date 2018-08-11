import React from "react";

const TextInput = props => (
  <div
    className={`${
      props.meta.touched && props.meta.error ? "uk-form-danger" : ""
    }`}
  >
    <label className="uk-form-label">{props.label}</label>
    <input
      placeholder={props.placeholder}
      autoFocus={props.autofocus}
      className={`uk-input ${
        props.meta.touched && props.meta.error ? "uk-form-danger" : ""
      }`}
      type={props.type}
      {...props.input}
    />
    <label
      className="uk-text-small"
      style={
        !(props.meta.touched && props.meta.error)
          ? { color: "transparent" }
          : null
      }
    >
      {props.meta.error || props.placeholder || props.label}
    </label>
  </div>
);

export { TextInput };
