import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <>
      <h1>Products</h1>
      <ul className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export default ProductList;