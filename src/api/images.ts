import { Photo, PhotoPreview } from '../types/Photo';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

export const getRandomPhotos = async (
  page = 1,
): Promise<PhotoPreview[]> => {
  const data = await fetch(`${BASE_URL}&page=${page}&per_page=20`);
  const photos: Photo[] = await data.json();

  return photos.map((photo: Photo) => ({
    id: photo.id,
    alt_description: photo.alt_description,
    created_at: photo.created_at,
    description: photo.description,
    url: photo.urls.regular,
  }));
};
