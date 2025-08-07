import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../store/Products/ProductSlice";

export default function AddProductForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const style =
    "p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
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
      className="flex flex-col gap-4 p-6 bg-gray-200 rounded-lg"
    >
      <label htmlFor="name">Product Name:</label>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        className={style}
        onChange={(e) => setName(e.target.value)}
        requried
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        min={1}
        className={style}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="url"
        placeholder="https://example.com/image.jpg"
        value={image}
        className={style}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        placeholder="Description"
        value={description}
        className={style}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button
        type="submit"
        className=" w-96 text-center items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4 rounded-lg hover:from-teal-400 hover:to-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}
