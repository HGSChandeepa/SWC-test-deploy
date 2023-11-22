import React from "react";
import Button from "@mui/material/Button";

type CustomIconButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  children: React.ReactNode;
  color?: "inherit" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  iconColor?: string;
  textColor?: string;
};

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
  onClick,
  disabled,
  fullWidth,
  startIcon,
  children,
  color = "primary",
  size = "medium",
  backgroundColor,
  iconColor,
  textColor,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: "50px",
    width: "200px",
  };

  const iconStyle: React.CSSProperties = {
    color: iconColor,
  };

  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
      size={size}
      style={buttonStyle}
    >
      {children}
    </Button>
  );
};

export default CustomIconButton;
