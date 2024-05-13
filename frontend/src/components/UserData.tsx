import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { useEffect, useState } from "react";
import { getUser } from "../services/user.service";
import { setUser } from "../reducers/userSlice";
import "../scss/UserData.scss";
import { NewUser } from "../types/user";
import Errors from "./Errors";

export default function UserData() {
  const { name, phone } = useAppSelector((store) => store.user);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    async function handleFetch() {
      try {
        if (!name && !phone) {
          const userId = localStorage.getItem("user_id");
          if (userId) {
            const user: unknown = await getUser(userId);
            dispatch(setUser(user as NewUser));
          }
        }
      } catch (error: any) {
        setError("error occured");
      }
    }
    handleFetch();
  }, []);

  return (
    <div className="user-data">
      {error && <Errors errors={[error]} />}
      <div className="field">
        <h1>Name:</h1>
        <h2>{name}</h2>
      </div>
      <div className="field">
        <h1>Phone:</h1>
        <h2>{phone}</h2>
      </div>
    </div>
  );
}
