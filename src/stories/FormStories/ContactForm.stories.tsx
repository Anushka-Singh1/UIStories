
import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "../../Components/Form/ContactForm";
import { action } from "@storybook/addon-actions";
import { z } from "zod";

const meta: Meta<typeof ContactForm> = {
  title: "Components/Form/ContactForm",
  component: ContactForm,
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
    submitButtonColor: {
      control: "color",
    },
    submitButtonTextColor: {
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
          isTextarea?: boolean;
        };
        
        type ContactFormProps = {
          fields: InputField[];
          formBackgroundColor?: string;
          formTextColor?: string;
          submitButtonColor?: string;
          submitButtonTextColor?: string;
          schema: z.ZodObject<any>;
          onSubmit?: (data: Record<string, string>) => void;
        };
        
        export function ContactForm({
          fields,
          schema,
          onSubmit,
          formBackgroundColor = "white",
          formTextColor = "black",
          submitButtonColor = "blue",
          submitButtonTextColor = "white",
        }: ContactFormProps) {
          const initialState: Record<string, string> = {};
          fields.forEach((field) => {
            initialState[field.name] = "";
          });
        
          const [formData, setFormData] = useState(initialState);
          const [errors, setErrors] = useState<Record<string, string>>({});
        
          const handleChange = (
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
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
              className="p-4 rounded shadow-md"
            >
              {fields.map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block mb-2" htmlFor={field.name}>
                    {field.label}
                  </label>
        
                  {field.isTextarea ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4} // optional, you can control the textarea height
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
        
                  {errors[field.name] && (
                    <span className="text-red-500 text-sm">{errors[field.name]}</span>
                  )}
                </div>
              ))}
        
              <button
                type="submit"
                style={{
                  backgroundColor: submitButtonColor,
                  color: submitButtonTextColor,
                }}
                className="px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          );
        }
        `,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx
import { ContactForm } from "../../Components/Form/ContactForm";
import { z } from "zod";

// Define the Zod schema
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

// Define the fields for the form
const fields = [
  { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
  { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
  { label: "Phone", type: "tel", name: "phone", placeholder: "Enter your phone number" },
  { label: "Message", type: "text", name: "message", placeholder: "Enter your message", isTextarea: true },
];

<ContactForm
  fields={fields}
  schema={schema}
  formBackgroundColor="white"
  formTextColor="black"
  submitButtonColor="blue"
  submitButtonTextColor="white"
  onSubmit={(data) => console.log(data)}
/>
\`\`\`

This example shows how to use the \`ContactForm\` component with custom fields and a Zod schema for validation. The schema ensures that the name, email, phone number, and message are correctly validated before submission.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
    args: {
        fields: [
            { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
            { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
            { label: "Phone", type: "tel", name: "phone", placeholder: "Enter your phone number" },
            { label: "Message", type: "text", name: "message", placeholder: "Enter your message", isTextarea: true },
        ],
        schema: z.object({
            name: z.string().min(1, { message: "Name is required" }),
            email: z.string().email({ message: "Invalid email address" }),
            phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
            message: z.string().min(1, { message: "Message cannot be empty" }),
        }),
        formBackgroundColor: "#f9f9f9",
        formTextColor: "#333",
        submitButtonColor: "#007bff",
        submitButtonTextColor: "#fff",
        onSubmit: action("submitted"),
    },
};