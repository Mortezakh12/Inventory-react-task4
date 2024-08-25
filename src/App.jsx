import AddNewCategory from "./components/AddNewCategory";
import NavBar from "./components/Navbar";
import { CategoriesProvider } from "./Context/CategoryContext";

export default function App() {
  return (
    <CategoriesProvider>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <AddNewCategory />
        </div>
      </div>
    </CategoriesProvider>
  );
}
