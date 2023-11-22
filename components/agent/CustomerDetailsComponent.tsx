import CustomDatePicker from "@components/Layout/DatePicker";
import { Box, Button, TextField, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

// const [value, setValue] = useState(currentDate);
type CustomerDetailsProps = {
  customerName: string;
  setCustomerName: (val: string) => void;
  customerEmail: string;
  setCustomerEmail: (val: string) => void;
  customerAdressLine1: string;
  setCustomerAdressLine1: (val: string) => void;
  customerAdressLine2: string;
  setCustomerAdressLine2: (val: string) => void;
  customerCity: string;
  setCustomerCity: (val: string) => void;
  dateValue: Dayjs | null;
  //set the default value to current date
  setDateValue: (val: Dayjs | null) => void;
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  customerName,
  setCustomerName,
  customerEmail,
  setCustomerEmail,
  customerAdressLine1,
  setCustomerAdressLine1,
  customerAdressLine2,
  setCustomerAdressLine2,
  customerCity,
  setCustomerCity,
  dateValue,
  setDateValue,
}) => {
  return (
    <div className="sm:px-2 px-1 md:px-4 pb-1">
      <div className=" px-5 bg-slate-200 border-4 border-slate-400 flex flex-col w-full pb-10">
        <div className=" my-10 text-3xl font-bold">
          <h2>Add Customer Details</h2>
        </div>
        <div className="h-full w-full">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            alignItems="stretch"
            className="w-full"
          >
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Cutomer Name
              </Typography>
              <TextField
                required
                id="outlined-required"
                placeholder="Jhon Wick"
                className="w-full rounded-lg h-8"
                name="CustomerName"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCustomerName(event.target.value);
                }}
                hiddenLabel
                value={customerName}
              />
            </div>
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Email Adress
              </Typography>
              <TextField
                type="email"
                required
                id="outlined-required"
                className="w-full rounded-lg h-8"
                placeholder="myemail@cyahoo.om"
                name="CustomerEmail"
                variant="outlined"
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}",
                  title: "Please enter a valid email address",
                }}
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Cutomer Adress
              </Typography>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Adress line 1.."
                  className="w-full rounded-lg h-8"
                  hiddenLabel
                  value={customerAdressLine1}
                  onChange={(e) => setCustomerAdressLine1(e.target.value)}
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Adress line 2.."
                  className="w-full rounded-lg h-8 "
                  hiddenLabel
                  value={customerAdressLine2}
                  onChange={(e) => setCustomerAdressLine2(e.target.value)}
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="City"
                  className="w-full rounded-lg h-8"
                  hiddenLabel
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                />
              </div>
              <div className="line-container my-10">
                <hr className="line" />
              </div>
              <CustomDatePicker
                label="Enter Date"
                value={dateValue}
                setValue={setDateValue}
              />

              <div className="line-container my-10">
                <hr className="line" />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
