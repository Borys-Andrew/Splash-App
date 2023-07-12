import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
import { getRandomPhotos } from '../../api/images';
import { Container } from '../../components/Container';
import { Gallery } from '../../components/Gallery';
import { PhotoPreview } from '../../types/Photo';
import './GalleryPage.scss';

export const GalleryPage: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const [searchQuery, setsearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const fetchMorePhotos = async () => {
    setHasMore(true);
    try {
      const data = await getRandomPhotos(page, searchQuery);

      if (data.length === 0) {
        setHasMore(false);

        return;
      }

      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMorePhotos();
  }, []);

  useEffect(() => {
    fetchMorePhotos();
  }, [searchQuery]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setsearchQuery(query);
      setPage(1);
    }, 500);

    return () => clearTimeout(delayInputTimeoutId);
  }, [query, 500]);

  return (
    <div className="gallery">
      <Container>
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={photos.length}
          next={fetchMorePhotos}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Gallery photos={photos} />
        </InfiniteScroll>
      </Container>
    </div>
  );
};
