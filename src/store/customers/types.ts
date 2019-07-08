export interface Customers {
    id: number,
    name: string,
    address: string,
    phone: string
}

export interface CustomersState {
   customers: {
     [id: number]: Customers
   },
  ids: number[],
  error: string | null,
  isLoading: boolean
}