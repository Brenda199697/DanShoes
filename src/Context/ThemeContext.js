import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider =({children}) => {
    const data = {};
    
    return <ThemeContext.Provider value={data} > {children}</ThemeContext.Provider>;
};

export {ThemeProvider};
export default ThemeContext;