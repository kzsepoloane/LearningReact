"use client";
import { FormStatus, useFormStatus } from "react-dom";

const Submit = () => {
  const formStatusPending: FormStatus = useFormStatus();
  return (
    <button
      type="submit"
      className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      disabled={formStatusPending.pending}
    >
      Save
    </button>
  );
};

export default Submit;
