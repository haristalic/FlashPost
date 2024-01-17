import { IPhotos } from '../../models/IPhotos';
import './ImgPost.css';

export const ImgPost = (props: any) => {
  return (
    <>
      {props.photos.map((photo: IPhotos) => (
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.title}
          className="image-container"
        ></img>
      ))}
    </>
  );
};
