import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

/*  'createContext' create a new context object. It accepts default values  as an argument.
    It returns a Context object which consists of a Provider component.
    The Provider component is used to wrap the part of the component tree where you want to share data. It accepts a value prop that provides the data to be shared.    */

/*  'useContext' is a React hook that allows functional components to consume context.
    It accepts a context object (created by createContext) as an argument.
    It provides a way to access the context value directly within a functional component    */
