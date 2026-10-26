function ProductItem({ product }) {
  return (
    <li className="product">
      <img src={product.thumbnail} alt={product.title} width="150" />

      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>⭐ {product.rating}</p>

      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.reviewerName}</strong> ({review.rating}/5): {review.comment}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ProductItem;