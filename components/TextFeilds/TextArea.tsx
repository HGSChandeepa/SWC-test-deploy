import React from "react";

import { Typography } from "@mui/material";

type TextAreaProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
  placeholder: string;
  type: string;
  width?: string;
  value: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  id,
  label,
  placeholder,
  width = "100%",
  value,
}) => {
  const inputStyle = {
    width: width,
  };

  return (
    <div>
      <Typography className="mb-3">{label}</Typography>
      <textarea
        className="border-2 border-gray-400 rounded-md p-2 h-14 w-full z-10"
        name={name}
        id={id}
        placeholder={placeholder}
        style={inputStyle}
        required
        value={value}
      />
    </div>
  );
};

export default TextArea;
