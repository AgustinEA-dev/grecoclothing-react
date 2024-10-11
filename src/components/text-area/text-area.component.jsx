import "./text-area.styles.scss";

const TextArea = ({ label, isError, ...otherProps }) => {
  return (
    <div className="group">
      <textarea className="textarea-input" {...otherProps}></textarea>
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : null
          } textarea-input-label`}
        >
          {label}
        </label>
      )}
      {isError && <span className="error">{isError}</span>}
    </div>
  );
};

export default TextArea;
