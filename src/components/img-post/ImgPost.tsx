import { IPhotos } from '../../models/IPhotos';
import './ImgPost.css';

type Props = {
  photos:IPhotos[];
};

export const ImgPost = ( { photos}:Props) => {
  return (
    <>
      {photos.map((photo: IPhotos) => (
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
