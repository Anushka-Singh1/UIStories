type ButtonProps = {
  label: string;
  color: string;
  TextColor: string;
};

export const Button = ({ label, color, TextColor }: ButtonProps) => {
  return (
      <button className="px-4 py-2 rounded"
        style={{ backgroundColor: color, color: TextColor }}>
      {label}
    </button>
  );
};
