import React from "react";
import { getProducts } from "@/prisma-db";
import { Product } from "@/generated/prisma";
import ProductsList from "@/app/components/productList";
import { deleteProduct } from "./actions";
import Search from "../components/search";

export default async function Products({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);
  const deleteProductAction = async (product: Product) => {
    "use server";
    // Call the delete product action here
    await deleteProduct(product.id);
  };

  return (
    <>
      <Search />
      <ProductsList
        products={products}
        deleteProductAction={deleteProductAction}
      />
    </>
  );
}
