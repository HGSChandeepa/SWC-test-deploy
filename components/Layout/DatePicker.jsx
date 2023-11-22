"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const CutomDatePicker = ({ label, value, setValue }) => {
  const currentDate = new Date(Date.now());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        defaultValue={dayjs("2023-04-17")}
        onChange={(newvalue) => setValue(newvalue)}
      />
    </LocalizationProvider>
  );
};

export default CutomDatePicker;
