import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import vercel from "../../public/assets/images/vercel.svg";
import { useAppSelector } from "../../redux/store";

type ReviewComponentProps = {
  customerName: string;
  customerEmail: string;
  customerAdressLine1: string;
  customerAdressLine2: string;
  customerCity: string;
};

const ReviewComponent = ({
  customerName,
  customerEmail,
  customerAdressLine1,
  customerAdressLine2,
  customerCity,
}: ReviewComponentProps) => {
  //states
  const [plantationShutterTotal, setPlantationShutterTotal] = React.useState(0);
  const [rollerBlindsTotal, setRollerBlindsTotal] = React.useState(0);
  const [curtainTotal, setCurtainTotal] = React.useState(0);
  const [grossTotal, setGrossTotal] = React.useState(0);
  const [gstTotal, setGstTotal] = React.useState(0);

  const [plantationShutterLocations, setPlantationShutterLocations] =
    React.useState<any>([]);
  const [rollerBlindsLocations, setRollerBlindsLocations] = React.useState<any>(
    []
  );
  const [venetianBlindsLocations, setVenetianBlindsLocations] =
    React.useState<any>([]);

  //redux
  const windowData = useAppSelector((state) => state.windowDataReducer);
  console.log(windowData, "windowData");

  //caicucate the total of all the plantation shutters from windowData
  useEffect(() => {
    //loop the windowData  and get the total of plantation shutters price
    let plantationShutterTotal = 0;
    let rollerBlindsTotal = 0;
    let curtainTotal = 0;

    let newPlantationShutterLocations: any[] = [];
    let newRollerBlindsLocations: any[] = [];
    let newVenetianBlindsLocations: any[] = [];

    for (let i = 0; i < windowData.length; i++) {
      const window = windowData[i];
      if (window.plantationShutter) {
        plantationShutterTotal += window.plantationShutter.price;
        //add the location to the plantationShutterLocations
        newPlantationShutterLocations = [
          ...newPlantationShutterLocations,
          window.plantationShutter.Location,
        ];
      }
      if (window.rollerBlind) {
        rollerBlindsTotal += window.rollerBlind.price;
        //add the location to the rollerBlindsLocations
        newRollerBlindsLocations = [
          ...newRollerBlindsLocations,
          window.rollerBlind.Location,
        ];
      }
      if (window.curtain) {
        curtainTotal += window.curtain.price;
        //add the location to the venetianBlindsLocations
        newVenetianBlindsLocations = [
          ...newVenetianBlindsLocations,
          window.curtain.Location,
        ];
      }
    }

    //set the plantationShutterTotal
    setPlantationShutterTotal(plantationShutterTotal);
    setRollerBlindsTotal(rollerBlindsTotal);
    setCurtainTotal(curtainTotal);

    //set the gross total
    setGrossTotal(plantationShutterTotal + rollerBlindsTotal + curtainTotal);
    //set the gst total
    setGstTotal(
      (plantationShutterTotal + rollerBlindsTotal + curtainTotal) / 10
    );

    //set the new locations
    setPlantationShutterLocations(newPlantationShutterLocations);
    setRollerBlindsLocations(newRollerBlindsLocations);
    setVenetianBlindsLocations(newVenetianBlindsLocations);
  }, [windowData]);

  console.log(plantationShutterTotal, "plantationShutterTotal");
  console.log(rollerBlindsTotal, "rollerBlindsTotal");
  console.log(curtainTotal, "venetianBlindsTotal");

  console.log(plantationShutterLocations, "plantationShutterLocations");
  console.log(rollerBlindsLocations, "rollerBlindsLocations");
  console.log(venetianBlindsLocations, "venetianBlindsLocations");

  //handle send quotation email
  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify({
      //   subject,
      //   message,
      // }),
    });
    console.log(await response.json());
  };

  return (
    <div className="px-32">
      <section>
        <Typography>Review your order</Typography>
      </section>

      {/* A4 Email  */}
      <div className="relative overflow-x-auto  w-[794px] bg-slate-100 p-5 mt-5">
        {/* HEADER */}
        <section className="flex items-center justify-between h-[300px]  border-b-4">
          {/* address */}
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <p className="font-black">Spectrum Window Concepts</p>
              <p>434/189B South Centre Road</p>
              <p>Tullamarine VIC 3043</p>
              <p>sales@spectrumwindowconcepts.com.au</p>
              <p>ABN 1550933</p>
            </div>
            <div>
              <p className="font-black">Address</p>
              <p>{customerName}</p>
              <p>{customerAdressLine1}</p>
              <p>{customerAdressLine2}</p>
              <p>{customerCity}</p>
              <p>Roville</p>
            </div>
          </div>

          {/* lofo stuff */}

          <div className="flex flex-col gap-10 text-md">
            {/* logo */}
            <div>
              <Image src={vercel} alt="company-logo" />
            </div>

            {/* detials */}
            <div className=" flex flex-col gap-3">
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Quote: <span>001</span>
              </p>
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Date:{" "}
                <span>
                  {
                    ///current date
                    new Date().toLocaleDateString()
                  }
                </span>
              </p>
              <p className=" p-2 bg-blue-400 text-white w-auto">
                Expiration Date:{" "}
                <span>
                  {
                    //one month from now
                    new Date(
                      new Date().setMonth(new Date().getMonth() + 1)
                    ).toLocaleDateString()
                  }
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* TABLE */}

        <section className=" mt-2">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs  uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  PRODUCT
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  DESCRIPTION
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  GST
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 bg-white">
              {
                //plantation shutters
                plantationShutterTotal > 0 && (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Plantation Shutters
                    </th>
                    <td className="px-6 py-4">
                      {
                        //display the locations separated by comma
                        plantationShutterLocations.join(", ")
                      }
                    </td>
                    <td className="px-6 py-4">GST</td>
                    <td className="px-6 py-4 justify-end flex items-end">
                      {plantationShutterTotal.toFixed(2)}
                    </td>
                  </tr>
                )
              }
              {rollerBlindsTotal > 0 && (
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Roller Blinds
                  </th>
                  <td className="px-6 py-4">
                    {rollerBlindsLocations.join(", ")}
                  </td>
                  <td className="px-6 py-4">GST</td>
                  <td className="px-6 py-4">{rollerBlindsTotal.toFixed(2)}</td>
                </tr>
              )}
              {
                //curtains
                curtainTotal > 0 && (
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      Curtains
                    </th>
                    <td className="px-6 py-4">
                      {venetianBlindsLocations.join(", ")}
                    </td>
                    <td className="px-6 py-4">GST</td>
                    <td className="px-6 py-4">{curtainTotal.toFixed(2)}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </section>

        {/* total secctonn */}
        <section className=" flex text-sm font-medium justify-between py-3 border-b-4">
          <div className="w-1/2"></div>
          <div className=" w-64 gap-y-3 flex flex-col">
            <div className="flex justify-between">
              <p>SUBTOTAL</p>
              <p>{grossTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>GST TOTAL</p>
              <p>{gstTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-lg bg-blue-400 p-2 text-white">
              <p>TOTAL</p>
              <p>A$ {(grossTotal + gstTotal).toFixed(2)}</p>
            </div>
          </div>
        </section>

        {/* bass */}
        <section className=" my-3">
          <p className="text-sm">Bass Summary</p>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs  uppercase bg-blue-400 text-white ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  RATE
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  GST
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  NET
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-900 bg-white">
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  GST @10%
                </th>
                <td className="px-6 py-4">{gstTotal.toFixed(2)}</td>
                <td className="px-6 py-4">{(gstTotal * 10).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* send the email */}
      <section className=" mt-5">
        <h1 className="font-bold text-lg">Send the quotation email</h1>
        <p className=" text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          perspiciatis minima tempora cumque deserunt dolorem dolore iure
          reprehenderit, aliquid quos eos animi suscipit inventore provident
          eius tenetur earum at distinctio.
        </p>
        <div className="flex flex-col mt-5">
          <h1>Customer Email Address</h1>
          <input
            className=" border px-2 py-2 border-slate-500 rounded-md mt-3 w-2/3"
            placeholder="Customer email"
            value={customerEmail}
          />

          <button
            onClick={sendMail}
            className=" bg-blue-600 text-white px-3 py-2 rounded-md mt-3 w-40 hover:bg-blue-700 ease-in-out"
          >
            Send Quotation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewComponent;
