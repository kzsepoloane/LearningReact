"use client";
import { useRouter } from "next/navigation";
const getRandomProduct = () => Math.floor(Math.random() * 100) + 1;
const OrderProduct = () => {
  const router = useRouter();
  const productId = getRandomProduct();

  return (
    <div>
      <h1>Intercepted Order Product</h1>
      <p>Random Product ID: {productId}</p>

      <button onClick={() => router.push(`products/${productId}`)}>
        Order Product
      </button>
    </div>
  );
};

export default OrderProduct;
