import { getData } from "@/helpers";
import Container from "./Container";
import ProductData from "./ProductData";
import { Products } from "../../type";

const Products = async () => {
  const products = await getData();

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {products?.map((product: Products) => (
        <ProductData product={product} key={product._id} />
      ))}
    </Container>
  );
};

export default Products;
