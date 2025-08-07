import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../store/Products/ProductSlice";

export default function ProductForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const inputStyle =
    "p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image || !description) return;
    dispatch(
      addProduct({ image, name, price: parseFloat(price), description })
    );
    setName("");
    setImage("");
    setPrice("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        ➕ Add New Product
      </h2>

      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Product Name"
          value={name}
          className={inputStyle + " w-full"}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          placeholder="Price"
          value={price}
          min={1}
          className={inputStyle + " w-full"}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block font-medium mb-1">
          Image URL
        </label>
        <input
          type="url"
          id="image"
          placeholder="https://example.com/image.jpg"
          value={image}
          className={inputStyle + " w-full"}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-medium mb-1">
          Description
        </label>
        <input
          type="text"
          row="3"
          id="description"
          placeholder="Description"
          value={description}
          className={inputStyle + " w-full"}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 rounded-md hover:from-teal-400 hover:to-blue-600 transition"
      >
        Add Product
      </button>
    </form>
  );
}
