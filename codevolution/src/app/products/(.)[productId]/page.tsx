import React from "react";
import Link from "next/link";
import { ProductDetailsProps } from "../_lib/ProductDetailsProps";
import { Metadata } from "next";

export async function generateMetadata({ params }: {params: ProductDetailsProps}): Promise<Metadata> {
  const {productId} = await params;
  return {
    title: `Intercepted Product ${productId}`,
    description: `Intercepted Product ${productId} description`,
  };
}
export default async function ProductDetails({ params }: {params: ProductDetailsProps}) {
  const { productId } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Intercepted Product {productId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <Link href="/order-product" className="text-blue-500 mr-4">
        Order Product
      </Link>
    </div>
  );
}
