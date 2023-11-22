"use client";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SelectionCard from "@components/admin/SelectionCard";
import { SaveAllIcon } from "lucide-react";

export default function Page() {
  const [numberOfSections, setNumberOfSections] = useState<number>(1);
  const [sectionData, setSectionData] = useState<
    {
      input: string;
      selectedOption: string;
      dropdownData: string[];
      multiSelectData: string[];
    }[]
  >([
    {
      input: "",
      selectedOption: "",
      dropdownData: [],
      multiSelectData: [],
    },
  ]);

  const [allSelectionCardData, setAllSelectionCardData] = useState<{
    cards: {
      input: string;
      selectedOption: string;
      dropdownData: string[];
      multiSelectData: string[];
    }[];
  }>({
    cards: [],
  });

  // Add new section
  const handleAddSection = () => {
    setNumberOfSections(numberOfSections + 1);
    setSectionData([
      ...sectionData,
      { input: "", selectedOption: "", dropdownData: [], multiSelectData: [] },
    ]);
  };

  // Update section data when a field in SelectionCard changes
  const updateSectionData = (
    index: number,
    newData: {
      input: string;
      selectedOption: string;
      dropdownData: string[];
      multiSelectData: string[];
    }
  ) => {
    const updatedData = [...sectionData];
    updatedData[index] = newData;
    setSectionData(updatedData);
  };

  // Store data for the current section in allSelectionCardData
  const storeSectionData = () => {
    // Check if the data already exists before adding it
    const exists = allSelectionCardData.cards.some((card) => {
      return (
        JSON.stringify(card) === JSON.stringify(sectionData[0]) // Compare with the first section's data
      );
    });

    if (!exists) {
      setAllSelectionCardData({
        cards: [...allSelectionCardData.cards, ...sectionData],
      });
    }
  };

  console.log(allSelectionCardData);
  return (
    <div className="flex flex-col w-full p-5 pb-52 px-4 bg-slate-300">
      <h2 className="font-bold text-xl">
        Add the data set for <span className="text-blue-600">Roof Covers</span>
      </h2>
      <div className="w-full mt-5 flex flex-col gap-5 items-center justify-center">
        {Array.from({ length: numberOfSections }).map((_, index) => (
          <SelectionCard
            key={index}
            index={index}
            sectionData={sectionData[index]}
            updateSectionData={updateSectionData}
          />
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => {
            handleAddSection();
            storeSectionData(); // Store the current section's data
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Data
          <span>
            <AddCircleIcon />
          </span>
        </button>
      </div>

      <div className=" my-5">
        <p className=" text-lg">
          🚀If you finished adding the dataset for the new product{" "}
          <span className=" text-red-600 font-bold">
            💡 plaease double check
          </span>{" "}
          and after you can save the new product.
        </p>
      </div>

      <div className="flex justify-end mt-10 border-t-4 py-4 border-slate-700">
        <button className="bg-green-500 flex gap-2 text-white px-4 py-2 rounded hover:bg-green-600">
          Save New Product
          <span>
            <SaveAllIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
