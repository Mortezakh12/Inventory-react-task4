import { useId, useState } from "react";
import useCategories from "../Context/CategoryContext";

const AddNewCategory = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const { addCategory } = useCategories();

  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ ...categoryFormData,createdAt:new Date().toISOString(),id});
    setCategoryFormData({ title: "", description: "" });
  };

  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section>
      <div className={`${isShow ? "" : "hidden"} mb-6`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New category
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              value={categoryFormData.title}
              onChange={changeHandler}
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={() => setIsShow(!isShow)}
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
              id="cancel-add-category"
            >
              Cancel
            </button>
            <button
            type="submit"
              id="add-category-btn"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`${
          isShow ? "hidden" : ""
        } flex-1 text-slate-200  py-2 rounded-xl`}
        onClick={() => setIsShow(!isShow)}
      >
        Add new Category?
      </button>
    </section>
  );
};

export default AddNewCategory;
