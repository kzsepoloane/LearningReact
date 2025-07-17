"use client";

import { Product } from "@/generated/prisma";
import Form from "next/form";
import Link from "next/link";
import { useOptimistic } from "react";

//In the tutorial starts off as server action then gets moved to client component for optimistic UI
const ProductList = ({
  products,
  deleteProductAction,
}: {
  products: Product[];
  deleteProductAction: (product: Product) => Promise<void>;
}) => {
  const [optimisticProducts, removeOptimistic] = useOptimistic(
    products,
    (currentItems, optimisticValue: Product) => {
      return currentItems.filter((item) => item.id !== optimisticValue.id);
    }
  );
  const deleteHandler = async (product: Product) => {
    await removeOptimistic(product);
    await deleteProductAction(product);
  };
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {optimisticProducts.map((product) => (
          <li key={product.id} className="mb-2">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                      {product.title}
                    </h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                    {product.description || "Lorem ipsum dolor sit amet."}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <Form
                    action={deleteHandler.bind(null, product)}
                    className="mt-4"
                  >
                    <button
                      type="submit"
                      className="px-4 py-2 mt-4 text-white bg-red-500 round-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </Form>
                </div>
              </div>

              <p className="mt-5">
                This card component is part of a larger, open-source library of
                Tailwind CSS components. Learn more by going to the official{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="#"
                  target="_blank"
                >
                  Flowbite Documentation
                </a>
                .
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
