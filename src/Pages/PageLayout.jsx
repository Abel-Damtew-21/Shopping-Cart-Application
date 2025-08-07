import AddProductForm from "../component/AddProductsForm";
import ProductList from "../component/ProductList";
import CartTable from "../component/CartTable";
function PageLayout() {
  return (
    <div className="w-full h-full p-6 bg-gray-600">
      <header className="text-center text-2xl font-bold text-white mb-6">
        Products
      </header>
      <hr className="mb-6" />
      <ProductList />
      <AddProductForm />
      <CartTable />
    </div>
  );
}
export default PageLayout;
