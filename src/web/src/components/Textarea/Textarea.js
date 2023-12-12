export default function Textarea({
  label,
  name,
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
      <textarea
        className={`input__field input__field--textarea ${className}`}
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
