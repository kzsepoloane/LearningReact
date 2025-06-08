import React from "react";
import Link from "next/link";
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        Review {reviewId} about Product {productId}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae.
      </p>
      <Link href="/contact-us" className="text-blue-500 mr-4">
        Do you have any questions? Contact us
      </Link>
    </div>
  );
}
