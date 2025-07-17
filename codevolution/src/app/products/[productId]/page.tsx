import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ProductDetailsProps } from "../_lib/ProductDetailsProps";
import { getProduct } from "@/prisma-db";
import NotFound from "@/app/not-found";
import { deleteProduct } from "../actions";
import { redirect } from "next/navigation";

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
export default async function ProductDetails({
  params,
}: {
  params: ProductDetailsProps;
}) {
  const productId = (await params).productId;
  const product = await getProduct(parseInt(productId));
  if (!product) {
    NotFound();
  }
  const deleteProductAction = async () => {
    "use server";
    // Call the delete product action here
    await deleteProduct(product?.id || 0);
    redirect("/products");
  };
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Product {product?.title}</h1>
      <p>
        {product?.description ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae."}
      </p>
      <Link
        href={`/products/edit-product-server-action/${productId}`}
        className="text-blue-500 mr-4"
      >
        Edit Product
      </Link>
      <Link href="/order-product" className="text-blue-500 mr-4">
        Order Product
      </Link>
      <Link href="/docs/Hello/From/Product" className="text-blue-500">
        Go to Docs
      </Link>
      <Link href="/docs/Hello/From/Product" className="text-blue-500">
        Go to Docs
      </Link>
      <form action={deleteProductAction} className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-red-500 round-md hover:bg-red-600"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
