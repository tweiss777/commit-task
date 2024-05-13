import axios from "axios";
import { NewUser, User } from "../types/user";
export async function getUser(id: string): Promise<User> {
  try {
    const userResponse = await axios.get(`/api/v1/users/${id}`);
    const user: User = userResponse.data.data;
    return user;
  } catch (error) {
    throw error;
  }
}

export async function createNewUser(user: NewUser) {
  try {
    const newUserResponse = await axios.post("/api/v1/users", user);
    return newUserResponse.data.data.id;
  } catch (error) { 
    throw error;
  }
}
