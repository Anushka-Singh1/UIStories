import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "../../Components/Form/LoginForm";
import { action } from "@storybook/addon-actions";
import { z } from "zod";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Components/Form/LoginForm",
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
    LoginButtonColor: {
      control: "color",
    },
    LoginButtonTextColor: {
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
        code: `import { useState, ChangeEvent, FormEvent } from "react";
        import { z } from "zod";
        
        type InputField = {
          label: string;
          type: string;
          name: string;
          placeholder: string;
        };
        
        type LoginFormProps = {
          fields: InputField[];
          formBackgroundColor?: string;
          formTextColor?: string;
          LoginButtonColor?: string;
          LoginButtonTextColor?: string;
          schema: z.ZodObject<any>;
          onSubmit?: (data: Record<string, string>) => void;
        };
        
        export function LoginForm({
          fields,
          schema,
          onSubmit,
          formBackgroundColor = "white",
          formTextColor = "black",
          LoginButtonColor = "Blue",
          LoginButtonTextColor = "white",
        }: LoginFormProps) {
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
            <div className="flex items-center justify-center h-screen">
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: formBackgroundColor }}
                className="shadow-lg rounded-xl px-8 pt-6 pb-8 m-10 w-full max-w-sm"
              >
                {fields.map(({ label, type, name, placeholder }) => (
                  <div key={name} className="mb-4">
                    <label
                      htmlFor={name}
                      style={{ color: formTextColor }}
                      className="block text-sm font-semibold mb-2"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      id={name}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={handleChange}
                      className={\`w-full px-3 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 \${
                        errors[name] ? "border-red-500" : ""
                      }\`}
                    />
                    {errors[name] && (
                      <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <button
                  style={{
                    backgroundColor: LoginButtonColor,
                    color: LoginButtonTextColor,
                  }}
                  type="submit"
                  className={\`w-full hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition duration-200\`}
                >
                  Login
                </button>
              </form>
            </div>
          );
        }
        `,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx
import { LoginForm } from "../../Components/Form/LoginForm";
import { z } from "zod";

// Define the Zod schema
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Define the fields for the form
const fields = [
  { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
  { label: "Password", type: "password", name: "password", placeholder: "Enter your password" },
];

<LoginForm
  fields={fields}
  schema={schema}
  formBackgroundColor="white"
  formTextColor="black"
  LoginButtonColor="blue"
  LoginButtonTextColor="white"
  onSubmit={(data) => console.log(data)}
/>
\`\`\`

This example shows how to use the \`LoginForm\` component with custom fields and a Zod schema for validation. The schema ensures that the email is valid and the password meets the required length.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    formBackgroundColor: "white",
    fields: [
      {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter your email",
      },
      {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter your password",
      },
    ],
    schema: z.object({
      email: z.string().email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
    }),
    onSubmit: action("submitted"),
  },
};
