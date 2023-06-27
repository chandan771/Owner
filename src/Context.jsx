// 1 => Create a context (Warehouse) -- CONTEXT API -- STORE OF DATA
// 2 => provider
// 3 => consumer -- / UseContext hook
// Providing value in <AppContext.Provider> tag must

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const API = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  name: "",
  image: "",
  services: []
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Aecom Enterprises",
        image: "./images/hero.svg",
        para:
          "Aecom leads the development of advance computing solutions for rugged system with the latest Innovations in GPGPU-based AI Application and Cyber Security."
      }
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Aecom Technology",
        image: "./images/about1.svg",
        para:
          "Digital security company AECOM uses AI to address national security issues. Its AE/infokit platform uses AI, data science and data conditioning to create decision-making algorithms that are designed to work with, rather than replace, human intelligence."
      }
    });
  };

  // To get the API Data
  // Error handling we need async

  const getServices = async (url) => {
    try {
      const res = await fetch(url);

      const data = await res.json();

      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // To Call The API

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
      {children}
    </AppContext.Provider>
  );
};

// Global context hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
