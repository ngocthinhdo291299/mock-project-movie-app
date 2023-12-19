import { useDispatch } from "react-redux";
import Button from "../../../button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addMovie } from "../../../../slices/cartSlice";

const AddToCartBtn = ({ movieDetail }: { movieDetail: any }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addMovie(movieDetail));
  };
  return (
    <Button className="btn-detail-movie" onClick={() => handleAddToCart()}>
      <AiOutlineShoppingCart className="btn-detail-movie-icon" />
      THÊM VÀO GIỎ HÀNG
    </Button>
  );
};

export default AddToCartBtn;
