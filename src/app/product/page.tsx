import Container from "@/components/Container";
import { getSingleProduct, getTrendingData } from "@/helpers";
import { Products } from "../../../type";
import ProductData from "@/components/ProductData";

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
        <div>
          <p>Trending Product</p>
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
