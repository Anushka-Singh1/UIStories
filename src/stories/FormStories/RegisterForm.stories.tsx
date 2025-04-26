import { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "../../Components/Form/RegisterForm";
import { action } from "@storybook/addon-actions";
import { z } from "zod";

const meta: Meta<typeof RegisterForm> = {
  title: "Components/Form/RegisterForm",
  component: RegisterForm,
  tags: ["autodocs"],
  argTypes: {
    fields: {
      control: "object",
    },
    formBackgroundColor: {
      control: "color",
    },
    formTextColor: {
      control: "color",
    },
    registerButtonColor: {
      control: "color",
    },
    registerButtonTextColor: {
      control: "color",
    },
    schema: {
      control: "object",
    },
    onSubmit: { action: "submitted" },
  },
  parameters: {
    docs: {
      source: {
        code: `import { useState, FormEvent, ChangeEvent } from "react";
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
        
        `,
      },

      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx
import { RegisterForm } from "../../Components/Form/RegisterForm";
import { z } from "zod";

// Define the Zod schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Define the fields for the form
const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
  { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "Enter your phone number" },
  { label: "Password", type: "password", name: "password", placeholder: "Enter your password" },
];

// Usage of the RegisterForm component
<RegisterForm
  fields={fields}
  schema={schema}
  formBackgroundColor="white"
  formTextColor="black"
  registerButtonColor="blue"
  registerButtonTextColor="white"
  onSubmit={(data) => console.log(data)}
/>
\`\`\`

This example demonstrates how to use the \`RegisterForm\` component with custom fields and a Zod schema for validation. The schema ensures that the name, email, phone number, and password are validated before submission.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    fields: [
      {
        label: "Name",
        type: "text",
        name: "name",
        placeholder: "Enter your name",
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter your email",
      },
      {
        label: "Phone",
        type: "tel",
        name: "phone",
        placeholder: "Enter your phone number",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter your password",
      },
    ],
    schema: z.object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z.string().email({ message: "Invalid email address" }),
      phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" }),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
    }),
    formBackgroundColor: "#f9f9f9",
    formTextColor: "#333",
    registerButtonColor: "#007bff",
    registerButtonTextColor: "#fff",
    onSubmit: action("submitted"),
  },
};
