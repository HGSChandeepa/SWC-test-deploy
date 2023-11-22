//this is the provider for the redux store that can be used to access the store from any component

"use client";

import { Provider } from "react-redux";
import { store } from "./store";

function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
