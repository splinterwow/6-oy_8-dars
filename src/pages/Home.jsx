import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");

  return (
    <div>
      <div className="align-content">
        <h1 className="text-3xl text-center  mb-4">All Products</h1>
        {isPending && <h3 className=" text-xl  text-center">Loading...</h3>}
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Home;
