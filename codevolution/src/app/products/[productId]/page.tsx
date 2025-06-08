import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ProductDetailsProps } from "../_lib/ProductDetailsProps";

export async function generateMetadata({ params }: {params: ProductDetailsProps}): Promise<Metadata> {
  const {productId} = await params;
  return {
    title: `Product ${productId}`,
    description: `Product ${productId} description`,
  };
}
export default async function ProductDetails({ params }: {params: ProductDetailsProps}) {
  const productId = (await params).productId;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Product {productId}</h1>
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
      <Link href="/docs/Hello/From/Product" className="text-blue-500">
        Go to Docs
      </Link>
    </div>
  );
}
