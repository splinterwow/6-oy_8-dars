import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";

function Cart() {
  const { data } = useContext(GlobalContext);
  console.log(data);

  if (!data) {
    return <div className="text-center text-2xl"><b>Loading...</b></div>; 
  }

  return (
    <div className="align-content  space-x-3">
      <h1 className="text-center font-bold text-3xl">All products</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div className="flex items-center border border-solid border-black mt-3"> 
              <img className="mb-3 w-45  h-45  object-cover border-r-2  border-orange-300" src={item.thumbnail} alt={item.description} />
              <div className="p-5">
                <p className=" -mt-36 mb-3"><b>Description: </b>{item.description}</p>
                <p className="mb-3"><b>Price: </b>{item.price}</p>
                <p className="mb-3"><b>Stock: </b>{item.stock}</p>
                <button className="btn btn-primary ">Buy</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
