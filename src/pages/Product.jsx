import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfin";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    Error,
  } = useFetch("https://dummyjson.com/products/" + id);

  const addDocDb = async () => {
    await addDoc(collection(db, "products"), product);
  };
  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-4xl mb-5">{product.title}</h1>

          <div className="carousel carousel-center p-4 space-x-3 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img
                    src={image}
                    className="rounded-box max-h-60 lg:max-h-96  h-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <div className="border border-solid border-black mt-3 rounded-lg">
            <p className="text-4xl p-2">
              Brand: <b></b>
              {product.brand}
            </p>
            <p className="text-4xl  p-2">
              Discount: <b></b>
              {product.discountPercentage}
            </p>

            <p className="text-4xl p-2">
              Rating: <b></b>
              {product.rating}
            </p>

            <p className="text-4xl p-2">
              Categoria: <b></b>
              {product.category}
            </p>
          </div>
          <button onClick={addDocDb} className="btn btn-primary mt-3 mb-3 flex">
            <span>Add to Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Product;
