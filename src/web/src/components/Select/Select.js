import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./styles.css";

export default function BasicSelect({
  label,
  name,
  className = "",
  value,
  onChange,
  options = [],
  infoText,
  disabled,
}) {
  return (
    <div className={`input__wrapper ${className}`}>
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <FormControl fullWidth>
        <Select
          labelId={name}
          id={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {infoText && <span className="input__infoText">{infoText}</span>}
    </div>
  );
}
