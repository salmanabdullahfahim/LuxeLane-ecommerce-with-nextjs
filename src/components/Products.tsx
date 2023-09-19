import { getData } from "@/helpers";
import Container from "./Container";
import ProductData from "./ProductData";

const Products = async () => {
  const products = await getData();

  return (
    <Container>
      {products?.map((product) => (
        <ProductData />
      ))}
    </Container>
  );
};

export default Products;
