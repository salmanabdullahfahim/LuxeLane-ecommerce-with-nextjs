export interface Products {
  _id: number;
  titles: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}

export interface ProductProps {
  product: Products;
}
