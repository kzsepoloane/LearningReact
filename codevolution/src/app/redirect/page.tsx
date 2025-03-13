"use client";
import { notFound, redirect } from "next/navigation";
const getRandomProduct = () => Math.floor(Math.random() * 100) + 1;
const RedirectOnEven = () => {
  const productId = getRandomProduct();
  return Math.abs(productId % 2) === 0
    ? redirect(`products/${productId}`)
    : notFound();
};

export default RedirectOnEven;
