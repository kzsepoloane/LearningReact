import { Field, Input, Textarea } from "@chakra-ui/react";
import { forwardRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type InputFieldProps = {
  type?: "text" | "password" | "textarea" | "email";
  label?: string;
  error?: FieldError;
} & Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

export const InputField = forwardRef((props: InputFieldProps, ref) => {
  const { type = "text", label, error, ...inputProps } = props;
  return (
    <Field label={label} errorText={error?.message} invalid={!!error}>
      {type === "text" ? (
        <Textarea bg="white" rows={8} {...inputProps} />
      ) : (
        <Input
          bg="white"
          type={type}
          {...inputProps}
          ref={ref as React.LegacyRef<HTMLInputElement>}
        />
      )}
    </Field>
  );
});

InputField.displayName = "InputField";
