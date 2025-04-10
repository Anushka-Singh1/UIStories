type Badgeprop = {
    label: string;
    color: string;
}

export const Badge = ({ label, color }: Badgeprop) => {
    return (
        <span className={`bg-${color}-500 text-white px-2 py-1 rounded`}>
            {label}
        </span>
    );
};