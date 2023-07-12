import { createContext } from "react";

const defaultvalue = {
  heading: "Hello",
};

export const ContentContext = createContext(defaultvalue);

const GlobalDataProvider = ({ children }) => (
  <ContentContext.Provider value={defaultvalue}>
    {children}
  </ContentContext.Provider>
);

export default GlobalDataProvider;
