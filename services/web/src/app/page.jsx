import SlideShow from './components/slideShow';
import { getHighlightedPhotos } from '@/graphql/queries/photo';

export default async function Home() {
  const slideShowPhotos = await getHighlightedPhotos();

  return (
    <div>
      <SlideShow photos={slideShowPhotos.photos} />
    </div>
  );
}
