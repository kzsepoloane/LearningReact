import { ProductErrors } from "./ProductErrors";

type ProductFormState = {
  title: string;
  price: number;
  description: string;
  errors: ProductErrors;
};

export type { ProductFormState };
