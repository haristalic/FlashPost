import { useEffect, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { ImgPost } from '../../components/img-post/ImgPost';
import { IPhotos, IPhotosState } from '../../models/IPhotos';
import { PhotosService } from '../../services/PhotosService';

const ImagePage = () => {
  const [photosState, setPhotosState] = useState<IPhotosState>({
    loading: false,
    photos: [] as IPhotos[],
    errorMsg: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setphotosPerPage] = useState(20);

  useEffect(() => {
    setPhotosState({ ...photosState, loading: true });
    PhotosService.getAllPhotos()
      .then((res) =>
        setPhotosState({
          ...photosState,
          loading: false,
          photos: res.data,
        })
      )
      .catch((err) =>
        setPhotosState({
          ...photosState,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);
  const { loading, photos, errorMsg } = photosState;

  const indexOfLastPhotos = currentPage * photosPerPage;
  const indexOffFirstPhotos = indexOfLastPhotos - photosPerPage;
  const currentPhotos = photos.slice(
    indexOffFirstPhotos,
    indexOfLastPhotos
  ) as IPhotos[];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeNumberOfPhotosPerPage = (photoNumber:number) => setphotosPerPage(photoNumber);

  return (
    <>
      <div className="posts-container img-post">
        <ImgPost photos={currentPhotos} />
      </div>
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
        changeNumberOfPhotosPerPage={changeNumberOfPhotosPerPage}
      />
    </>
  );
};

export default ImagePage;
