import { getData } from "@/helpers";
import Container from "./Container";
import ProductData from "./ProductData";
import { Products } from "../../type";
import Skeleton from "./Skeleton";

const Products = async () => {
  const products = await getData();

  return (
    <div>
      <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
        {products?.map((product: Products) => (
          <ProductData product={product} key={product._id} />
        ))}
      </Container>
      {products.length == 0 ? (
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((item, index) => (
            <Skeleton key={index} />
          ))}
        </Container>
      ) : null}
    </div>
  );
};

export default Products;
