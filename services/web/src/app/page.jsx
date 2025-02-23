import SlideShow from './components/slideShow';
import { getHighlightedPhotos } from '@/graphql/queries/photo';

export default async function Home() {
  const featuredPhotos = await getHighlightedPhotos();

  return (
    <div>
      <SlideShow photos={featuredPhotos.photos} />
    </div>
  );
}
