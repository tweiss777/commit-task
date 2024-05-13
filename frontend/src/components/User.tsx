import "../scss/User.scss";
import useUserService from "../hooks/useUserService";
import Tab from "./Tab";
import Tabs from "./Tabs";
import UserData from "./UserData";
import UserForm from "./UserForm";
import SubmitBtn from "./SubmitBtn";
import Errors from "./Errors";
import regexPatterns from "../utils/regexPatterns";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { setUser } from "../reducers/userSlice";
import { NewUser } from "../types/user";
export default function User() {
  const user: NewUser = useAppSelector((store) => store.user);
  const { createUser, success, responseErrors, setResponseErrors } =
    useUserService();
  const dispatch = useAppDispatch();
  function handleOnChange(name: string, value: string) {
    switch (name) {
      case "name":
        dispatch(setUser({ ...user, name: value }));
        break;
      case "phone":
        dispatch(setUser({ ...user, phone: value }));
        break;
      case "password":
        dispatch(setUser({ ...user, password: value }));
        break;
      case "confirm-password":
        dispatch(setUser({ ...user, confirmPassword: value }));
        break;
      default:
        break;
    }
  }

  async function handleOnSubmit() {
    const errors: string[] = [];
    if (!user.name.match(regexPatterns.name)?.length) {
      errors.push(
        "Name cannot be empty, may contain up to 32 characters, and can only contain letters.",
      );
    }
    if (!user.phone.match(regexPatterns.phone)?.length) {
      errors.push("Invalid phone number");
    }
    if (!user.password.match(regexPatterns.password)?.length) {
      errors.push(
        "Password must be in the range between 6 to 12 characters, contain one upper case, and one special character.",
      );
    }

    if (user.password && user.confirmPassword !== user.password) {
      errors.push("Passwords do not match");
    }
    if (!user.phone.includes("+")) {
      errors.push("Phone number must start with +");
    }
    if (errors.length) {
      setResponseErrors(errors);
      return;
    }

    await createUser(user);
  }

  return (
    <>
      <Tabs>
        <Tab title="Form">
          <div className="container">
            {success && <p className="success">User created successfully</p>}
            {responseErrors.length > 0 && <Errors errors={responseErrors} />}
            <UserForm
              name={user.name}
              phone={user.phone}
              password={user.password}
              confirmPassword={user.confirmPassword}
              handleOnChange={handleOnChange}
            />
            <SubmitBtn value="Submit" onSubmit={handleOnSubmit} />
          </div>
        </Tab>
        <Tab title="User">
          <UserData />
        </Tab>
      </Tabs>
    </>
  );
}
