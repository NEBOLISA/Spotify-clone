import React, { createContext, useContext, useReducer } from "react";

export const ServiceProviderContext = createContext();

export const ServiceProvider = ({ initialState, reducer, children }) => (
  <ServiceProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ServiceProviderContext.Provider>
);
export const useServiceProviderValue = () => useContext(ServiceProviderContext);
