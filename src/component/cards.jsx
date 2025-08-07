import AddtoCartBtn from "./AddToCart";

function Cards({ product }) {
  const { image, name, description, price } = product;
  return (
    <div className="bg-white flex flex-col text-black w-96 h-[24rem] justify-center items-center rounded-lg text-center p-6 mb-6 shadow-lg">
      <div className="flex justify-center items-center w-full h-32 mb-4">
        <img
          src={image}
          alt="Product image"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <span>{name}</span>
      <p>{description}</p>
      <span className="text-red-500 font-bold">${price}</span>

      <AddtoCartBtn product={product} />
    </div>
  );
}
export default Cards;
