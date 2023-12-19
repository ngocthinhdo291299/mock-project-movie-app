import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import MovieGrid from "../../movie-grid/MovieGrid";
import Checkout from "./Checkout";
import "./cart.scss";

const Cart = () => {
  const list = useSelector((state: any) => state.cart.list);
  const [showCheckout, setShowCheckout] = useState(false);
  const [page, setPage] = useState(1);
  const [display, setDisplay] = useState<any[] | undefined>([]);
  const totalOfRecord = !!list?.length ? list?.length : 0;
  const totalOfPage =
    totalOfRecord % 20 === 0
      ? totalOfRecord / 20
      : Math.ceil(totalOfRecord / 20);
  useEffect(() => {
    if (page * 10 > totalOfRecord) {
      setDisplay(list?.slice((page - 1) * 20, totalOfRecord));
    }
    setDisplay(list?.slice((page - 1) * 20, page * 20));
  }, [page, list]);
  const handlePrev = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalOfPage) {
      setPage((page) => page + 1);
    }
  };

  return (
    <div className="cart">
      {totalOfRecord === 0 ? (
        <div className="cart-noti">
          <BiSolidCameraMovie />
          <h2 className="noti">Mua phim về xem đi nhá!!!</h2>
        </div>
      ) : (
        <div className="catalog">
          <MovieGrid movies={display} type={"cart"} pageNumber={null} />
          <div>
            <div className="pagination">
              <div className="pre-page page-cart" onClick={() => handlePrev()}>
                Trước
              </div>
              <ul className="pagination-number">
                {Array(totalOfPage)
                  .fill(0)
                  .map((e: any, i: number) => {
                    return (
                      <li
                        className={
                          page == i + 1 ? "active page-cart" : "page-cart"
                        }
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </li>
                    );
                  })}
              </ul>
              <div className="next-page page-cart" onClick={() => handleNext()}>
                Sau
              </div>
              <button className="checkout" onClick={() => setShowCheckout(true)}>Checkout</button>
            </div>
          </div>
        </div>
      )}
      {showCheckout && <Checkout setShowCheckout={setShowCheckout} />}
    </div>
  );
};

export default Cart;
