import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultiSelectComponent({
  name,
  label,
  setValue,
  value = [],
  options = [],
}) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value);
  };

  const handleRenderValue = (selected) => {
    if (!options || !options.length) {
      return "";
    }

    return selected
      .map(
        (selectedItem) =>
          options?.find((option) => option.value === selectedItem).name
      )
      .join(", ");
  };

  const handleOptions = options?.map(({ name, value: optionValue }) => (
    <MenuItem key={optionValue} value={optionValue}>
      <ListItemText primary={name} />
    </MenuItem>
  ));

  return (
    <div className="input__wrapper">
      <label className="input__label">{label}</label>
      <FormControl>
        <Select
          id={name}
          multiple
          value={value}
          onChange={handleChange}
          renderValue={handleRenderValue}
          MenuProps={MenuProps}
        >
          {handleOptions}
        </Select>
      </FormControl>
    </div>
  );
}
