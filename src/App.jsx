import AddNewCategory from "./components/AddNewCategory";
import AddNewProduct from "./components/AddNewProduct";
import NavBar from "./components/Navbar";
import { CategoriesProvider } from "./Context/CategoryContext";
import { ProductsProvider } from "./Context/ProductsContext";

export default function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <AddNewCategory />
          <AddNewProduct/>
        </div>
      </div>
      </ProductsProvider>
    </CategoriesProvider>
  );
}
