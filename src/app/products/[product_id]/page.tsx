import React from "react";

const ProductDetails = ({ params }: { params: { product_id: string } }) => {
  return <div>Product details page {params.product_id}</div>;
};

export default ProductDetails;
