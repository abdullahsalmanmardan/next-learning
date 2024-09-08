"use client";
import { useRouter } from "next/navigation";
const Order = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("button clicked");
    router.push("/cart"); // navigate to cart page
  };

  return (
    <div>
      <h1>this is order page</h1>
      <button onClick={handleClick}></button>
    </div>
  );
};

export default Order;
