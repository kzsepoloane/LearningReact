import React from "react";
import { Metadata } from "next";
import { ProductDetailsProps } from "@/app/products/_lib/ProductDetailsProps";
import { ProductFormState } from "../../_lib/ProductFormState";
import ProductForm from "@/app/components/productForm";
import { getProduct } from "@/prisma-db";
import { notFound } from "next/navigation";
import { updateProduct } from "../../actions";

export async function generateMetadata({
  params,
}: {
  params: ProductDetailsProps;
}): Promise<Metadata> {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Product ${productId} description`,
  };
}
export default async function EditProduct({
  params,
}: {
  params: ProductDetailsProps;
}) {
  const productId = (await params).productId;
  const product: {
    id: number;
    title: string;
    price: number;
    description: string | null;
  } | null = await getProduct(parseInt(productId));
  if (!product) {
    notFound();
  }
  const { id, title, price, description } = product;
  const updateProductWithID = updateProduct.bind(null, id);
  const initialFormState: ProductFormState = {
    title,
    price,
    description: description ?? "",
    errors: {},
  };
  return (
    <ProductForm
      initialFormSate={initialFormState}
      action={updateProductWithID}
    />
  );
}
