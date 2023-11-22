
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { on } from "events";

type DropdownNormalProps = {
  label: string;
  index: number;
  id: string;
  data: string;
  value: string;
  name: string;
  options: { index: number; data: string }[];
  onChange: (value:SelectChangeEvent) => void;
};

export default function DropdownNormal({
  label,
  id,
  value,
  name,
  options,
  onChange,
}: DropdownNormalProps) {
  

  return (
    <div>
      <Typography className="mb-3">{label}</Typography>

      <Box className="rounded-md bg-white" sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            id={id}
            value={value} // Use the "selected" state for the selected value
            label={label}
            onChange={onChange}
            size="medium"
            name={name}
          >
            {options.map((option) => (
              <MenuItem value={option.data.toString()} key={option.index}>
                {option.data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
