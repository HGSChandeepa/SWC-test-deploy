"use client";

import {
  Box,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { ThemeColor } from "../../../../@core/layouts/types";

interface RowType {
  date: string;
  customer_name: string;
  status: string;
  Quotation_No: string;
  SA_details: string;
  Order_No: string;
  Order_data_content: string;
  form_status: string;
  Form_Genaration: string;
  Quotation_status: string;
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor;
  };
}

const rows: RowType[] = [
  {
    status: "professional",
    date: "09/27/2023",
    Quotation_No: "Q-0001",
    customer_name: "Dorothy H. Spencer",
    Order_data_content: "Curtains & Blinds",
    SA_details: "SA-0001",
    Order_No: "OD-0001",
    form_status: "Approved",
    Form_Genaration: "Genarate",
    Quotation_status: "Pending",
  },
  {
    status: "resigned",
    date: "09/29/2023",
    Quotation_No: "Q-0002",
    customer_name: "Samin Chandeepa",
    Order_data_content: "Curtains & Rollers",
    SA_details: "SA-0002",
    Order_No: "OD-0002",
    form_status: "Approved",
    Form_Genaration: "Genarate",
    Quotation_status: "Pending",
  },
];

const statusObj: StatusObj = {
  applied: { color: "info" },
  rejected: { color: "error" },
  current: { color: "primary" },
  resigned: { color: "warning" },
  professional: { color: "success" },
};

export default function page() {
  return (
    <Card className=" pb-80">
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Quotation No</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>SA Details</TableCell>
              <TableCell>Order Details</TableCell>
              <TableCell>Quickbooks</TableCell>
              <TableCell>Quotation Status</TableCell>
              <TableCell>Forms Gen</TableCell>
              <TableCell>Forms Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow
                hover
                key={row.Quotation_No}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell
                  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}
                    >
                      {row.Quotation_No}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.customer_name}</TableCell>
                <TableCell>{row.date}</TableCell>

                <TableCell>{row.SA_details}</TableCell>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}
                  >
                    {row.Order_No}
                  </Typography>
                  <Typography variant="caption">
                    {row.Order_data_content}
                  </Typography>
                </Box>
                <TableCell>
                  <Chip
                    clickable
                    label={"SendTo QuickBoooks"}
                    color={"success"}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    clickable
                    label={row.Quotation_status}
                    color={"secondary"}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    clickable
                    label={row.Form_Genaration}
                    color={"info"}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    clickable
                    label={row.form_status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
