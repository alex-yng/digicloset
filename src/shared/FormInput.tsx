interface FormInputProps {
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  type,
  placeholder,
  required = false,
  className,
  onChange,
}: FormInputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`px-2 py-1 outline-transparent rounded-xl bg-slate-600 hover:bg-slate-700 w-4/5 transition-colors duration-300 ${className}`}
      onChange={onChange}
    />
  );
}
