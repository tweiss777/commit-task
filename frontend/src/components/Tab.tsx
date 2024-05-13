
interface IProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}
export default function Tab({ children }: IProps) {
  return <div>{children}</div>;
}
