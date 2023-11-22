import React from "react";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material/styles";

type NormalButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary";
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
};

const NormalButton: React.FC<NormalButtonProps> = ({
  onClick,
  disabled,
  fullWidth,
  variant = "contained",
  color = "primary",
  backgroundColor,
  textColor,
  children,
}) => {
  const theme: Theme = useTheme();
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: "50px",
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      style={buttonStyle}
      size="large"
    >
      {children}
    </Button>
  );
};

export default NormalButton;
