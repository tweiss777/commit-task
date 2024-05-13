import { useState } from "react";
import { createNewUser } from "../services/user.service";
import { NewUser } from "../types/user";

export default function useUserService() {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseErrors, setResponseErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  

  async function createUser(user: NewUser) {
    try {
      if (responseErrors.length) {
        setResponseErrors([]);
      }

      if (success) {
        setSuccess(false);
      }
      setLoading(true);
      const id = await createNewUser(user);
      if (id) {
        localStorage.setItem("user_id", id)
        setSuccess(true);
      }
    } catch (error: any) {
      const errors: string[] = error.response.data.message.map(
        (err: string) => err,
      );
      setResponseErrors(errors);
    } finally {
      setLoading(false);
    }
  }

  return {
    success,
    setResponseErrors,
    createUser,
    responseErrors,
    loading,
  };
}
