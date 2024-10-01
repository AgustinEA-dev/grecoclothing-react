import "./text-area.styles.scss";

const TextArea = ({ label, isError, ...otherProps }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...otherProps}></textarea>
      {isError && <span className="error">{isError}</span>}
    </div>
  );
};

export default TextArea;
