import AddtoCartBtn from "./AddToCart";

function Cards({ product }) {
  const { image, name, description, price } = product;
  return (
    <div className="bg-white flex flex-col text-black w-96 h-[24rem] justify-center items-center rounded-lg text-center p-6 mb-6 shadow-lg  transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center items-center w-full h-32 mb-4">
        <img
          src={image}
          alt="Product image"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span className="text-lg font-semibold mt-2">{name}</span>
      <p className="text-gray-600 text-sm">{description}</p>
      <span className="text-blue-600 font-bold mt-1">${price}</span>

      <AddtoCartBtn product={product} />
    </div>
  );
}
export default Cards;
