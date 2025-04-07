"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const randomProductID = 15;
export default function Products() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link
            href="/products/1"
            className={
              pathname === "/products/1"
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product 1
          </Link>
        </li>
        <li>
          <Link
            href="/products/2"
            className={
              pathname === "/products/2"
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product 2
          </Link>
        </li>
        <li>
          <Link
            href="/products/3"
            className={
              pathname === "/products/3"
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product 3
          </Link>
        </li>
        <li>
          <Link
            href="/products/4"
            className={
              pathname === "/products/4"
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product 4
          </Link>
        </li>
        <li>
          <Link
            href="/products/5"
            className={
              pathname === "/products/5"
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product 5
          </Link>
        </li>
        <li>
          <Link
            href={`/products/${randomProductID}`}
            className={
              pathname === `/products/${randomProductID}`
                ? "font-bold mr-4"
                : "text-blue-500 mr-4"
            }
          >
            Product {randomProductID}
          </Link>
        </li>
        <li>
          <Link href="/order-product" className="text-blue-500 mr-4">
            Order Product
          </Link>
        </li>
      </ul>
    </div>
  );
}
