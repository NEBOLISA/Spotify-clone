import { createContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  return (
    <DataContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
