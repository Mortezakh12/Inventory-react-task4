import { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();
const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
  
    const addCategory = (category) => {
      setCategories([...categories, category]);
    };
  
    return (
      <CategoriesContext.Provider value={{ categories, addCategory }}>
        {children}
      </CategoriesContext.Provider>
    );
  };
  
  export { CategoriesProvider, CategoriesContext };

  const useCategories = () => {
    const { categories, addCategory } = useContext(CategoriesContext);
  
    return { categories, addCategory };
  };
  
  export default useCategories;