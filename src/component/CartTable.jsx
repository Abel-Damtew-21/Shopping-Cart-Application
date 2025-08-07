import { useSelector } from "react-redux";

export default function CartTable() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  console.log("Cart state:", cart);

  return (
    <div className="mt-12 w-full p-4 bg-gray-200 rounded-lg shadow-md">
      <header className="text-center text-2xl font-bold text-black mb-6">
        Cart
      </header>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <table className="w-full border border-collapse border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id || Math.random()}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">${item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="border p-2 font-bold">Total</td>
              <td className="border p-2 font-bold">${total}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}
