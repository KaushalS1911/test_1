import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();

  // // Products array with name, price, and quantity
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Product 1", price: 200, quantity: 1 },
  //   { id: 2, name: "Product 2", price: 300, quantity: 2 },
  // ]);

  // const [order, setOrder] = useState({});

  // // Calculate total amount based on product price and quantity
  // const totalAmount = products.reduce(
  //   (total, product) => total + product.price * product.quantity,
  //   0
  // );

  // const currency = "INR";
  // const receiptId = "2334324324";

  // function handleOrder(e) {
  //   // Post the order details to backend
  //   axios
  //     .post("http://localhost:8080/api/payment", {
  //       amount: totalAmount,
  //       currency,
  //       receipt: receiptId,
  //       products, // Send product details along with the payment request
  //     })
  //     .then((res) => {
  //       setOrder(res.data);
  //     })
  //     .catch((err) => console.log(err));

  //   var options = {
  //     key: "", // Add your Razorpay key here
  //     amount: totalAmount * 100, // Amount in paise for Razorpay
  //     currency,
  //     name: "Kaushal Sojitra",
  //     description: "Test Transaction",
  //     image: "https://i.ibb.co/5Y3m33n/test.png",
  //     order_id: order.id, // Pass the order ID from the backend
  //     handler: async function (response) {
  //       alert("Transaction successfully completed");
  //     },
  //     prefill: {
  //       name: "Kaushal Sojitra",
  //       email: "kaushalsojitra19@gmail.com",
  //       contact: "9726893439",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#000000",
  //     },
  //   };

  //   var rzp1 = new Razorpay(options);
  //   rzp1.on("payment.failed", function (response) {
  //     alert("Payment Failed.");
  //   });

  //   rzp1.open();
  //   e.preventDefault();
  // }

  return (
    <div>
      <h2>Home Page</h2>

      {/* Display products and their quantities */}
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} x ₹{product.price} = ₹
            {product.quantity * product.price}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{totalAmount}</h3>

      <button className="btn btn-primary" onClick={(e) => handleOrder(e)}>
        Buy Now
      </button> */}
    </div>
  );
}

export default Home;
