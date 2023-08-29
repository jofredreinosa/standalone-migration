export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rate;
  title: string;
}


interface Rate {
  rate: number;
  count: 120;
}
