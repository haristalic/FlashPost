import axios from "axios";
import { IPhotos } from "../models/IPhotos";

export class PhotosService {
  private static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllPhotos() {
    let photoUrl: string = `${this.URL}/photos`;
    return axios.get<IPhotos[]>(photoUrl);
  }
}