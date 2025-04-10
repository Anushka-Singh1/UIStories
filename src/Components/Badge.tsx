type Badgeprop = {
    label: string;
    color: string;
}

export const Badge = ({ label, color }: Badgeprop) => {
    return (
      <span
        className={`text-white px-2 py-1 rounded`}
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    );
};