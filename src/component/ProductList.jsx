import { useSelector } from "react-redux";

import Cards from "./Cards";

export default function ProductList() {
  const products = useSelector((state) => state.products);

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
        <Cards
          key={product.id}
          product={product}
        ></Cards>
      ))}
    </div>
  );
}
