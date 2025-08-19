const ThemeToggle = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: () => void;
}) => {
  return (
    <label htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        readOnly
        checked={value}
        onChange={onChange}
      />
      {value ? "Dark Theme" : "Light Theme"}
    </label>
  );
};

export default ThemeToggle;
