"use server";
import {
  addProduct,
  updateProduct as updateProductDB,
  deleteProduct as deleteProductDB,
} from "@/prisma-db";
import { redirect } from "next/navigation";
import { ProductFormState } from "./_lib/ProductFormState";
import { ProductErrors } from "./_lib/ProductErrors";
import { productSchema } from "./_lib/ProductValidation";
import { ValidationError } from "yup";

export const createProduct = async (
  previousState: ProductFormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const description = formData.get("description") as string;

  try {
    await productSchema.validate(
      { title, price, description },
      { abortEarly: false }
    );

    await addProduct(title, price, description);
    redirect("/products");
  } catch (errors) {
    const validationErrors = errors as ValidationError;
    const result: ProductErrors = {
      title: validationErrors.inner.find((e) => e.path === "title")?.message,
      price: validationErrors.inner.find((e) => e.path === "price")?.message,
      description: validationErrors.inner.find((e) => e.path === "description")
        ?.message,
    };
    return {
      title,
      price,
      description,
      errors: result,
    } as ProductFormState;
  }
};

export const updateProduct = async (
  id: number,
  previousState: ProductFormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = parseFloat(formData.get("price")?.toString() || "0");
  const description = formData.get("description") as string;

  try {
    await productSchema.validate(
      { title, price, description },
      { abortEarly: false }
    );

    await updateProductDB(id, title, price, description);
    redirect("/products");
  } catch (errors) {
    const validationErrors = errors as ValidationError;
    const result: ProductErrors = {
      title: validationErrors.inner.find((e) => e.path === "title")?.message,
      price: validationErrors.inner.find((e) => e.path === "price")?.message,
      description: validationErrors.inner.find((e) => e.path === "description")
        ?.message,
    };
    return {
      title,
      price,
      description,
      errors: result,
    } as ProductFormState;
  }
};

export const deleteProduct = async (id: number) => {
  await deleteProductDB(id);
};
