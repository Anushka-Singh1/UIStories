import { useState, FormEvent, ChangeEvent } from "react";
import { z } from "zod";

type InputField = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

type RegisterFormProps = {
  fields: InputField[];
  formBackgroundColor?: string;
  formTextColor?: string;
  registerButtonColor?: string;
  registerButtonTextColor?: string;
  schema: z.ZodObject<any>;
  onSubmit?: (data: Record<string, string>) => void;
};

export function RegisterForm({
  fields,
  schema,
  onSubmit,
  formBackgroundColor = "white",
  formTextColor = "black",
  registerButtonColor = "blue",
  registerButtonTextColor = "white",
}: RegisterFormProps) {
  const initialState: Record<string, string> = {};
  fields.forEach((field) => {
    initialState[field.name] = "";
  });

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (!result.success) {
      const errorMessages: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        errorMessages[err.path[0]] = err.message;
      });
      setErrors(errorMessages);
    } else {
      if (onSubmit) {
        onSubmit(formData);
      }
      setFormData(initialState);
      setErrors({});
    }
  };

  return (
    <form
          onSubmit={handleSubmit}
        style={{ backgroundColor: formBackgroundColor, color: formTextColor }}
      className={"p-6 rounded-lg w-[90%] mx-auto my-4"}
    >
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-2">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 rounded-md border border-gray-300"
          />
          {errors[field.name] && (
            <span className="text-red-500 text-xs">{errors[field.name]}</span>
          )}
        </div>
      ))}
      <button
              type="submit"
        style={{ backgroundColor: registerButtonColor, color: registerButtonTextColor }}
        className={"py-2 px-4 rounded-md border-none cursor-pointer"}
      >
        Register
      </button>
    </form>
  );
}
