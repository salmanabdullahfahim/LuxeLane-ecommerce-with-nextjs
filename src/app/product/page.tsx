import Container from "@/components/Container";
import { getSingleProduct, getTrendingData } from "@/helpers";
import { Products } from "../../../type";
import ProductData from "@/components/ProductData";
import SingleProduct from "@/components/SingleProduct";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
  const idString = searchParams._id;
  const _id = Number(idString);
  const product = getSingleProduct(_id);
  const trendyProduct = await getTrendingData();
  return (
    <div>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl font-semibold py-1 mt-3">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {trendyProduct.map((item: Products) => (
              <ProductData key={item._id} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
