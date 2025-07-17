"use client";
import Submit from "@/app/components/submit";
import { useActionState } from "react";
import { ProductFormState } from "../products/_lib/ProductFormState";

interface IProductFormProps {
  initialFormSate: ProductFormState;
  action: (
    fromState: ProductFormState,
    formData: FormData
  ) => Promise<ProductFormState>;
}

const ProductForm = (props: IProductFormProps) => {
  const { initialFormSate, action } = props;
  const [state, formAction, isPending] = useActionState(
    action,
    initialFormSate
  );
  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={state.title}
            required
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          step="0.01"
          name="price"
          defaultValue={state.price}
          required
        />
      </label>
      {state.errors.price && (
        <p className="text-red-500">{state.errors.price}</p>
      )}
      <label className="text-white">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          defaultValue={state.description ?? ""}
        />
      </label>
      {state.errors.description && (
        <p className="text-red-500">{state.errors.description}</p>
      )}
      <Submit /> or{" "}
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ProductForm;
