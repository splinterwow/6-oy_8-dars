import React from "react";

import { Link } from "react-router-dom";

import { IoMdPricetag } from "react-icons/io";

function ProductList({ products }) {
  return (
    <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        products.products.map((product) => {
          return (
            <li key={product.id} className="card  bg-base-100 shadow-xl">
              <figure className="border-b-2  border-orange-300">
                <img
                  src={product.thumbnail}
                  className="w-full  h-52  object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
                <div className="card-actions justify-between items-center">
                  <p className="text-2xl  flex gap-2 items-center">
                    <IoMdPricetag />${product.price}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
