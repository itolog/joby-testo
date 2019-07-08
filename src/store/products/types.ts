export interface Products {
  id: number;
  name: string;
  price: number;
}

export interface ProductsState {
  products: {
    [id: number]: Products
  },
  error: string | null,
  ids: number[],
  isLoading: boolean
}