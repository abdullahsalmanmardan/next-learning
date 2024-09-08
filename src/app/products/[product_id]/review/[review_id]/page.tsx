import React from "react";

const ProductReview = ({
  params,
}: {
  params: { product_id: string; review_id: string };
}) => {
  return (
    <div>
      This is review {params.review_id} for product {params.product_id}
    </div>
  );
};

export default ProductReview;
