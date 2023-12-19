import { useRef } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import useModal from "../../../custom-hook/useModal";
import apiConfig from "../../../api/apiConfig";
import { removeList } from "../../../slices/cartSlice";
import "./checkout.scss";
function Checkout({ setShowCheckout }: { setShowCheckout: any }) {
  const list = useSelector((state: any) => state.cart.list);
  const dispatch = useDispatch();
  const overlayRef = useRef<any>();
  const handlePayment = (e: any) => {
    e.preventDefault();
    if(confirm("Bạn có muốn thanh toán?")){
        toast.success("Thanh toán thành công");
        dispatch(removeList())
        setShowCheckout(false);
    }
  }
  useModal(overlayRef, setShowCheckout);
  const checkout = document.getElementById("checkout");
  return checkout
    ? ReactDom.createPortal(
        <>
          <div ref={overlayRef} className="overlay" />
          <div className="modal">
            <h1 className="modal-title">Checkout</h1>
            <ul className="checkout-list">
              {list.map((movie: any) => {
                return (
                  <li className="checkout-item" key={movie.id}>
                    <div
                      className="checkout-poster"
                      style={{
                        backgroundImage: `url(${apiConfig.w500Image(
                          movie.poster_path
                        )})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="checkout-infor">
                      <h3>{movie.original_title}</h3>   
                      <span>{movie.price}$</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="checkout-price">
              <h3>Total: {list.reduce((acc: any, c: any) => acc + c.price, 0)}$</h3>
              <button className="checkout" onClick={(e) => handlePayment(e)}>Thanh Toán</button>
            </div>
          </div>
        </>,
        checkout
      )
    : null;
}

export default Checkout;
