import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart/CartSlice";

function AddtoCartBtn({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(addToCart(product))}
      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}

export default AddtoCartBtn;
