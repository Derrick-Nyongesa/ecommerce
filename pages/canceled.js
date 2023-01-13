import React, { useEffect } from "react";
import Link from "next/link";
import { ImCancelCircle } from "react-icons/im";
import { useStateContext } from "../context/StateContext";

function Canceled() {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon_">
          <ImCancelCircle />
        </p>
        <h2>Your order has been Canceled!</h2>

        <p className="description">
          If you have any questions, please email
          <a className="email" href="nyongesaderrick@gmail.com">
            nyongesaderrick@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Canceled;
