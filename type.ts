export interface Products {
  _id: number;
  title: string;
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

export interface stateProps {
  shop: {
    productData: [];
    userInfo: {};
    orderData: {
      order: Products[];
    };
  };
}
