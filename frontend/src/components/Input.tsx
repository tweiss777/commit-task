import '../scss/Input.scss'
interface IProps {
  label: string;
  type: "text" | "password" | "phone";
  value: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, type, value, onChange, label }: IProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} name={name} />
    </div>
  );
}
