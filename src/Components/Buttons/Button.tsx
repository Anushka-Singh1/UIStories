type ButtonProps = {
    label: string;
    color: string;
};

export const Button = ({ label, color }: ButtonProps) => {
  return (
      <button className="text-white px-4 py-2 rounded"
        style={{ backgroundColor: color }}>
      {label}
    </button>
  );
};
