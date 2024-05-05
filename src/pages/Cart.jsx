import { useContext } from "react";
import { GlobalContext } from "../context/useGlobal";

function Cart() {
  const { data } = useContext(GlobalContext);
  console.log(data);

  return (
    <div className="align-content">
      <div>Cart</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.description} />
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
