import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart/CartSlice";

function AddtoCartBtn({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(addToCart(product))}
      className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
    >
      Add to Cart
    </button>
  );
}

export default AddtoCartBtn;
