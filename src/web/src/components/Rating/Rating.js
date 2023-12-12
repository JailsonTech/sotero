import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import "./styles.css";

export default function RatingComponent({
  name,
  label,
  defaultRating = 5,
  max = 5,
  value,
  onChange,
  readOnly = false,
}) {
  return (
    <div className="rating">
      {label && <label className="input__label">{label}</label>}
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name={name}
          defaultValue={defaultRating}
          max={max}
          onChange={onChange}
          value={value}
          precision={0.5}
          readOnly={readOnly}
        />
      </Box>
    </div>
  );
}
