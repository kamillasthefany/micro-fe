export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDesciption: string;
}

const products: Products[] = [
  {
    id: 1,
    name: 'Wheel Spinner',
    price: 5.99,
    description: 'Spinner Descrição',
    image: 'https://localhost:8080/fidget-1.jpg',
    longDesciption: 'Spinner Long Description',
  },
  {
    id: 2,
    name: 'Wheel Spinner 2',
    price: 2.99,
    description: 'Spinner Descrição 2',
    image: 'https://localhost:8080/fidget-2.jpg',
    longDesciption: 'Spinner Long Description',
  },
  {
    id: 3,
    name: 'Wheel Spinner 3',
    price: 3.99,
    description: 'Spinner Descrição 3',
    image: 'https://localhost:8080/fidget-3.jpg',
    longDesciption: 'Spinner Long Description',
  },

]

export default products;