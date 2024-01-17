import axios from "axios";
import { IUsers } from "../models/IUsers";
export class UsersService {
  private static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllUsers() {
    let userUrl: string = `${this.URL}/users`;
    return axios.get<IUsers[]>(userUrl).then((response) => response.data);
  }
}
