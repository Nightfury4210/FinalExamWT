import { Link } from "react-router-dom";
import "../styles/styles.css";

function ThankYou() {
  return (
    <div className="container">
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been successfully placed.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default ThankYou;
