import "../scss/Errors.scss";
interface IProps {
  errors: string[];
}

export default function Errors({ errors }: IProps) {
  return (
    <ul className="errors-container">
      {errors.map((error: string, i: number) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
}
