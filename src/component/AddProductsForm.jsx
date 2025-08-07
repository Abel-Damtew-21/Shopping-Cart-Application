import { useState } from "react";
import ProductForm from "./ProductForm";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AddProductsForm() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold rounded-lg shadow-md hover:from-teal-400 hover:to-green-600 transition-all duration-300"
      >
        <i
          className={`fas ${showForm ? "fa-eye-slash" : "fa-plus-circle"}`}
        ></i>
        {showForm ? "Hide Form" : "Add New Product"}
      </button>
      {showForm && <ProductForm />}
    </div>
  );
}
export default AddProductsForm;
