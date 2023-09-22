import { getSingleProduct } from "@/helpers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = ({ searchParams }: Props) => {
  const idString = searchParams._id;
  const _id = Number(idString);
  const product = getSingleProduct(_id);
  console.log(product);
  return <div>ProductPage</div>;
};

export default ProductPage;
