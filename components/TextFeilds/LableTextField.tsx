import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

type LableTextFieldProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
  placeholder: string;
  type: string;
  width?: string;
  value:string
};

const LableTextField: React.FC<LableTextFieldProps> = ({
  name,
  id,
  label,
  placeholder,
  type,
  width = "100%",
  onChange,
  value
}) => {
  const inputStyle = {
    width: width,
  };

  return (
    <div>
      <Typography className="mb-3">{label}</Typography>
      <input
        className="border-2 w-80  bg-white border-gray-400 rounded-md p-2 h-14 "
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        required 
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default LableTextField;
