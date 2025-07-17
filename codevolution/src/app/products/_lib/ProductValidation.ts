import * as yup from "yup";

export const productSchema = yup.object({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .required("Price is required")
    .min(1, "Price must be greater than $0.00"),
  description: yup
    .string()
    .max(500, "Description must be less than 500 characters"),
});

export type ProductFormData = yup.InferType<typeof productSchema>;
