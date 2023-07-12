import { Photo, PhotoPreview } from '../types/Photo';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.unsplash.com';

export const getRandomPhotos = async (page = 1, query = ''): Promise<PhotoPreview[]> => {
  const fetchURL = `${BASE_URL}/${query && 'search/'}photos/?client_id=${API_KEY}&page=${page}&per_page=15${query && `&query=${query}`}`;

  const data = await fetch(fetchURL);
  const photos: Photo[] = await data.json();

  return photos.map((photo: Photo) => ({
    id: photo.id,
    alt_description: photo.alt_description,
    created_at: photo.created_at,
    description: photo.description,
    urls: {
      regular: photo.urls.regular,
      thumb: photo.urls.thumb,
    },
  }));
};
