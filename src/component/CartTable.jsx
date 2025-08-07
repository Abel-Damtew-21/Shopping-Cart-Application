import { useSelector } from "react-redux";

export default function CartTable() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="mt-12 w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id || Math.random()}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
              >
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-blue-600 font-semibold">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-green-600">${total}</span>
          </div>

          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
