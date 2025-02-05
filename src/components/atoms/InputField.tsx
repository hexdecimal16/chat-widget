type InputFieldProps = {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};

export default function InputField({ value, placeholder, onChange, onKeyDown, disabled }: InputFieldProps) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full p-4 text-sm text-gray-700 bg-gray-50 rounded-lg focus:outline-none disabled:cursor-not-allowed"
      />
    );
  }
  