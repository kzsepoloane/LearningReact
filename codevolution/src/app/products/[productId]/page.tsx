import React from "react";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

export const generateMetaData = async ({ params }: ProductDetailsProps) => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
    description: `Product ${productId} description`,
  };
};
export default async function ProductDetails({ params }: ProductDetailsProps) {
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
    </div>
  );
}
