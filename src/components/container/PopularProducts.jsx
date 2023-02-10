import { products } from "../../Data/Data";
import Products from "./Products";
export default function PopularProducts() {
  return (
    <section className="container min_100vh">
      <div className="popular_container">
        <div className="title">
          Popular <span>products</span>
        </div>
        <div className="nextAndPrev">
          <div>Prev</div>
          <span>|</span>
          <div>Next</div>
        </div>
      </div>
      <div className="product_container">
        {products.map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}
