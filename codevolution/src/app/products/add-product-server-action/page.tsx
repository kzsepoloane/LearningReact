"use client";
import { ProductFormState } from "../_lib/ProductFormState";
import { createProduct } from "../actions";
import ProductForm from "@/app/components/productForm";

export default function CreateProduct() {
  return (
    <ProductForm
      initialFormSate={{ errors: {} } as ProductFormState}
      action={createProduct}
    />
  );
}
