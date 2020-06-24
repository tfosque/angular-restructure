export interface Cart {
  id: number;
  cart_title: string;
  product: {
    name: string;
    price: string;
    item_num: string;
    sale_price: string;
    url: string;
    color: string;
    qty: any;
  };
}
