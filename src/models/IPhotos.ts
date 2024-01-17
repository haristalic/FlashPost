export interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface IPhotosState {
  loading: boolean;
  photos: IPhotos[];
  errorMsg: string;
}
