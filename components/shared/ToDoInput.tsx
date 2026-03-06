import React from "react";
import { Input } from "../ui/input";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";

interface ToDoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  label: string;
  description?: string;
  error?: string;
}

export const ToDoInput = ({ inputId, label, description, error, ...props }: ToDoInputProps) => {
  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

      <Input id={inputId} {...props} />

      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
};
