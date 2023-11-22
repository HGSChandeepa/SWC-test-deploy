// here i will create the reducers and the actions for the window data

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface for the window data
interface windowData {
  windowId: string;
  plantationShutter?: PlantationShutterData;
  curtain?: CurtainData;
  rollerBlind?: RollerBlindData;
}

//interface for the plantation shutter data
interface PlantationShutterData {
  Location: string;
  width: number;
  Height: number;
  Mount_Configuration: string;
  Panel_Quantity: number;
  Blade_Size: string;
  Material: string;
  Color: string;
  Mid_rails: string;
  Layout_Details: string;
  Mount_methods: string;
  Frames_Configuration: string;
  Frame_Size: number;
  Split_Tilt_Rod: string;
  Tilt_rod_type: string;
  T_Post_Quantity: number;
  Distance_n_to_T1_T2_T3: number;
  Surcharge_Value: number;
  Price_per_square_meter: number;
  comments: string;
  price: number;
}

//interface for the curtain data
interface CurtainData {
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
}

//interface for the roller blind data
interface RollerBlindData {
  Location: string;
  width: number;
  Height: number;
  Fabric: string;
  Color: string;
  Category: string;
  Control_Side: string;
  Chanin_Type: string;
  Chain_Drop: string;
  Chain_Color: string;
  Bottom_Rail: string;
  Roll_Drop: string;
  Bottom_Color_Drop: string;
  Winder_Color: string;
  comments: string;
  price: number;
  Price_Per_Meter: number;
}

//create a slice for the window data

const windowDataSlice = createSlice({
  name: "windowData",
  initialState: [] as windowData[],

  //reducers
  reducers: {
    //add a window
    addWindow: (state, action: PayloadAction<windowData>) => {
      // state.push(action.payload);
    },

    // remove a window
    removeWindow: (state, action: PayloadAction<windowData>) => {
      return state.filter(
        (window) => window.windowId !== action.payload.windowId
      );
    },

    addPlantationShutterData: (
      state,
      action: PayloadAction<{
        plantationShutterData: PlantationShutterData;
        windowId: string;
      }>
    ) => {
      const { plantationShutterData, windowId } = action.payload;
      const existingWindow = state.find(
        (window) => window.windowId === windowId
      );

      if (existingWindow) {
        // If a window with the same windowId exists, update the plantationShutter data
        existingWindow.plantationShutter = plantationShutterData;
      } else {
        // If no window with the same windowId exists, add a new window
        state.push({
          windowId,
          plantationShutter: plantationShutterData,
        });
      }
    },

    addCurtainData: (
      state,
      action: PayloadAction<{ curtainData: CurtainData; windowId: string }>
    ) => {
      const { curtainData, windowId } = action.payload;
      const existingWindow = state.find(
        (window) => window.windowId === windowId
      );

      if (existingWindow) {
        // If a window with the same windowId exists, update the plantationShutter data
        existingWindow.curtain = curtainData;
      } else {
        // If no window with the same windowId exists, add a new window
        state.push({
          windowId,
          curtain: curtainData,
        });
      }
    },

    addRollerBlindData: (
      state,
      action: PayloadAction<{
        rollerBlindData: RollerBlindData;
        windowId: string;
      }>
    ) => {
      const { rollerBlindData, windowId } = action.payload;
      const existingWindow = state.find(
        (window) => window.windowId === windowId
      );

      if (existingWindow) {
        // If a window with the same windowId exists, update the plantationShutter data
        existingWindow.rollerBlind = rollerBlindData;
      } else {
        // If no window with the same windowId exists, add a new window
        state.push({
          windowId,
          rollerBlind: rollerBlindData,
        });
      }
    },

    //edit plantation shutter data
    editPlantationShutterData: (
      state,
      action: PayloadAction<{
        plantationShutterData: PlantationShutterData;
        windowId: string;
      }>
    ) => {
      const { plantationShutterData, windowId } = action.payload;

      // Create a new state object with the updated plantationShutterData
      return state.map((window) => {
        if (window.windowId === windowId) {
          return {
            ...window,
            plantationShutter: plantationShutterData,
          };
        }
        return window;
      });
    },

    //edit curtain data
    editCurtainData: (
      state,
      action: PayloadAction<{ curtainData: CurtainData; windowId: string }>
    ) => {
      const { curtainData, windowId } = action.payload;

      // Create a new state object with the updated plantationShutterData
      return state.map((window) => {
        if (window.windowId === windowId) {
          return {
            ...window,
            curtain: curtainData,
          };
        }
        return window;
      });
    },

    //edit roller blind data
    editRollerBlindData: (
      state,
      action: PayloadAction<{
        rollerBlindData: RollerBlindData;
        windowId: string;
      }>
    ) => {
      const { rollerBlindData, windowId } = action.payload;

      // Create a new state object with the updated plantationShutterData
      return state.map((window) => {
        if (window.windowId === windowId) {
          return {
            ...window,
            rollerBlind: rollerBlindData,
          };
        }
        return window;
      });
    },
    //remove plantation shutter data
    removePlantationShutterData: (state, action: PayloadAction<string>) => {
      const window = state.find((window) => window.windowId === action.payload);
      if (window) {
        window.plantationShutter = undefined;
        return state;
      }
      return state;
    },

    //remove curtain data
    removeCurtainData: (state, action: PayloadAction<string>) => {
      const window = state.find((window) => window.windowId === action.payload);
      if (window) {
        window.curtain = undefined;
        return state;
      }
      return state;
    },

    //remove roller blind data
    removeRollerBlindData: (state, action: PayloadAction<string>) => {
      const window = state.find((window) => window.windowId === action.payload);
      if (window) {
        window.rollerBlind = undefined;
        return state;
      }
      return state;
    },
  },
});

//export the actions
export const {
  addWindow,
  removeWindow,
  addPlantationShutterData,
  addCurtainData,
  addRollerBlindData,
  editPlantationShutterData,
  editCurtainData,
  editRollerBlindData,
  removePlantationShutterData,
  removeCurtainData,
  removeRollerBlindData,
} = windowDataSlice.actions;

//export the reducer
export default windowDataSlice.reducer;
