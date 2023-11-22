"use client";

import DropdownNormal from "@components/DropDowns/DropdownNormal";
import LableTextField from "@components/TextFeilds/LableTextField";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { Plantation_shutters_data } from "@constants/Plantation_shutters_data";

import React, { useState } from "react";
import TextArea from "@components/TextFeilds/TextArea";
import { Curtains_data } from "@constants/Curtains_data";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import {
  Cancel,
  ControlPointRounded,
  FastForward,
  FastForwardOutlined,
  Save,
  Calculate,
} from "@mui/icons-material";
import {
  addWindow,
  addCurtainData,
} from "../../../redux/slices/windowDataSlice";
import { AppDispatch, store } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CurtainProps {
  cancelFunc: () => void;
  data: {
    Location: string;
    width: number;
    Height: number;
    Category: string;
    Fabric: string;
    Curtain_Type: string;
    Color: string;
    Control: string;
    Track_Color: string;
    Return: string;
    Bottom_Hem: string;
    Bracket_Type: string;
    Lining: string;
    Price_Per_Meter: number;
    comments: string;
    price: number;
  };
  windowId: number;
}
export default function CurtainComponent({
  cancelFunc,
  data,
  windowId,
}: CurtainProps) {
  function isEmpty(obj: Object) {
    return Object.keys(obj).length === 0;
  }
  const [windowData, setWindowData] = useState(
    isEmpty(data)
      ? {
          Location: "",
          width: 0,
          Height: 0,
          Category: "",
          Fabric: "",
          Curtain_Type: "",
          Color: "",
          Control: "",
          Track_Color: "",
          Return: "",
          Bottom_Hem: "",
          Bracket_Type: "",
          Lining: "",
          Price_Per_Meter: 0,
          comments: "",
          price: 0,
        }
      : data
  );

  // validate the data
  function isFormValid(windowData: any) {
    return (
      windowData.Location &&
      windowData.width > 0 &&
      windowData.Height > 0 &&
      windowData.Category &&
      windowData.Fabric &&
      windowData.Curtain_Type &&
      windowData.Color &&
      windowData.Control &&
      windowData.Track_Color &&
      windowData.Return &&
      windowData.Bottom_Hem &&
      windowData.Bracket_Type &&
      windowData.Lining &&
      windowData.Price_Per_Meter > 0
    );
  }

  const calculatePrice = async () => {
    if (isFormValid(windowData)) {
      // Calculate the price
      let updatedValue = {
        price: windowData["width"]/1000 * windowData["Price_Per_Meter"],
      };
      setWindowData((wd) => ({
        ...wd,
        ...updatedValue,
      }));
    } else {
      toast.error(
        "Please fill in all required fields before saving the window.",
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 60,
          transition: Flip,
        }
      );
    }
  };

  const updateOnChange = (name: string, value: any) => {
    let updatedValue = { [name]: value };
    setWindowData((wd) => ({
      ...wd,
      ...updatedValue,
    }));
  };

  //redux
  const dispatch = useDispatch<AppDispatch>();

  //add plantation shutter to new window
  const addCurtainsToNewWindow = (curtainData: any) => {
    // dispatch(addWindow(newWindow));

    dispatch(
      addCurtainData({
        windowId: windowId.toString(),
        curtainData,
      })
    );
  };

  const handleAddCurtainsToNewWindow = () => {
    if (isFormValid(windowData)) {
      const curtainData = windowData;
      console.log(curtainData);

      addCurtainsToNewWindow(curtainData);
      //display the toast
      toast.success("Curtain data added successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 60,
        transition: Flip,
      });
    } else {
      toast.error(
        "Please fill in all required fields before saving the window.",
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 60,
          transition: Flip,
        }
      );
    }
  };

  //PRINT THE DATA
  console.log(windowData);
  return (
    <div className=" ">
      <section className="lg:px-32 md:px-32 p-4">
        <Typography className="text-3xl font-semibold">Curtains</Typography>
        <p className="opacity-50">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.
        </p>
      </section>
      <div className=" lg:mx-36 md:mx-10 p-5flex flex-col gap-4  bg-slate-200 border-4 border-slate-400 my-5 p-10 rounded-lg">
        <LableTextField
          name={"Location"}
          id={"Location"}
          label={"Add the Location details of the window"}
          type={"text"}
          placeholder="Bed Room.."
          onChange={(event: SelectChangeEvent) => {
            updateOnChange(event.target.name, event.target.value);
          }}
          value={windowData["Location"]}
        />

        <section>
          <Typography className="border-b-2 border-blue-500 text-blue-600 mt-5">
            Add the details about the window dimension
          </Typography>
          <div className="flex gap-16 items-center mt-2">
            <LableTextField
              name={"width"}
              id={"width"}
              label={"Width(mm)"}
              type={"number"}
              placeholder="1200.."
              onChange={(event: SelectChangeEvent<HTMLInputElement>) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["width"].toString()} // convert number to string
            />

            <LableTextField
              name={"Height"}
              id={"Height"}
              label={"Height"}
              type={"number"}
              placeholder="1200.."
              onChange={(event: SelectChangeEvent) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["Height"].toString()}
            />
          </div>
        </section>
        <section className=" flex flex-col gap-4">
          <hr className=" border--2 border-blue-500 mt-6" />
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Category"}
                id={"Category"}
                value={windowData["Category"]}
                name={"Category"}
                options={Curtains_data.Category}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />

              <LableTextField
                name={"Fabric"}
                id={"Fabric"}
                label={"Fabric"}
                type={"text"}
                placeholder="Cotton.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Fabric"]}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Curtain Type"}
                id={"Curtain_Type"}
                name={"Curtain_Type"}
                options={Curtains_data.Curtain_type}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
                value={windowData["Curtain_Type"]}
              />
              <LableTextField
                name={"Color"}
                id={"Color"}
                label={"Color"}
                type={"text"}
                placeholder="Green.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Color"]}
              />
            </div>
          </div>
          <hr className=" border-b-2 border-blue-500 mb-6" />
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Control"}
                id={"Control"}
                value={windowData["Control"]}
                name={"Control"}
                options={Curtains_data.Control}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Track Color"}
                id={"Track_Color"}
                value={windowData["Track_Color"]}
                name={"Track_Color"}
                options={Curtains_data.Track_Color}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Return"}
                id={"Return"}
                value={windowData["Return"]}
                name={"Return"}
                options={Curtains_data.Return}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Bottom Hem"}
                id={"Bottom_Hem"}
                value={windowData["Bottom_Hem"]}
                name={"Bottom_Hem"}
                options={Curtains_data.Bottom_Hem}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Bracket Type"}
                id={"Bracket_Type"}
                value={windowData["Bracket_Type"]}
                name={"Bracket_Type"}
                options={Curtains_data.Bracket_Type}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Lining"}
                id={"Lining"}
                value={windowData["Lining"]}
                name={"Lining"}
                options={Curtains_data.Linig}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                index={0}
                data={""}
              />
            </div>
          </div>

          <LableTextField
            name={"Price_Per_Meter"}
            id={"Price_Per_Meter"}
            label={"Price Per Meter"}
            type={"number"}
            placeholder="1200.."
            onChange={(event: SelectChangeEvent) => {
              updateOnChange(event.target.name, event.target.value);
            }}
            value={windowData["Price_Per_Meter"].toString()}
          />
        </section>

        <section className="border-t-2 my-10 border-blue-500">
          <div className=" mt-4">
            <LableTextField
              name={"comments"}
              id={"comments"}
              label={"Please add any comments or remarks "}
              placeholder={"comments and remarks.."}
              type={"text"}
              onChange={(event: SelectChangeEvent) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["comments"]}
            />
          </div>
        </section>
        <div className=" text-right mb-3">
          <Box component="div" sx={{ visibility: "visible" }}>
            {/* Price ${windowData["price"]} */}
            Price:  {windowData["price"].toFixed(2) } {" "}AUD
          </Box>
        </div>
        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={calculatePrice}
            size="small"
            startIcon={<Calculate />}
            backgroundColor="#FFA500"
            iconColor="white"
            textColor="white"
          >
            Calculate Price
          </CustomIconButton>
        </div>
        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={handleAddCurtainsToNewWindow}
            size="small"
            startIcon={<Save />}
            backgroundColor="#0066FF"
            iconColor="white"
            textColor="white"
          >
            Save Window
          </CustomIconButton>
        </div>
        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={cancelFunc}
            size="small"
            startIcon={<Cancel />}
            backgroundColor="#eb2344"
            iconColor="white"
            textColor="white"
          >
            Cancel
          </CustomIconButton>
        </div>

        <hr className=" border-b-2 border-blue-500 mt-6" />
      </div>
    </div>
  );
}
