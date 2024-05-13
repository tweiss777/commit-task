import "../scss/UserForm.scss";
import { NewUser as NewUserProps } from "../types/user";
import Input from "./Input";

type IProps = {
    handleOnChange: (inputName: string, value: string) => void
}


export default function UserForm(props: NewUserProps & IProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;
    props.handleOnChange(name, value)
  }
  return (
    <div className="user-form-container">
      <Input
        label="Name"
        name="name"
        type="text"
        value={props.name}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        name="phone"
        type="phone"
        value={props.phone}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={props.password}
        onChange={handleChange}
      />
      <Input
        label="Confirm Password"
        name="confirm-password"
        type="password"
        value={props.confirmPassword}
        onChange={handleChange}
      />
    </div>
  );
}
