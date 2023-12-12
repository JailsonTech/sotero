import "./styles.css";

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
  infoText,
  ...props
}) {
  return (
    <div className="input__wrapper">
      <label className="input__label">{label}</label>
      <input
        className={`input__field ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {infoText && <span className="input__infoText">{infoText}</span>}
    </div>
  );
}
