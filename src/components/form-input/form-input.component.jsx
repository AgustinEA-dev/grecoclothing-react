import "./form-input.styles.scss";

const FormInput = ({ label, isError, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {isError && <span className="error">{isError}</span>}
    </div>
  );
};

export default FormInput;
