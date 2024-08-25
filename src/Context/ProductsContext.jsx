import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts([...products, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, addProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };

const useProducts = () => {
  const { products, addProducts } = useContext(ProductsContext);

  return { products, addProducts };
};

export default useProducts;
