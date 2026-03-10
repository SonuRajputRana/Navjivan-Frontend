import GalleryCard from "./GalleryCard";
// import { GalleryItem } from "../../types/gallery";
import { type GalleryItem } from "../../../types/Gallery";

interface Props {
  items: GalleryItem[];
}

const  Gallery = ({ items }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map(item => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;