// import { GalleryItem } from "../../../types/Gallery";
import { type GalleryItem } from "../../../types/Gallery";

const GalleryCard = ({item} : {item:GalleryItem}) => {
    return (
        <div className="group relative rounded-2xl overflow-hidden shadow-md">
            <img
                src={item.image}
                className="h-70 w-full object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 p-4 text-white">
                <p className="text-sm">{item.year}</p>
                <h3 className="font-semibold">{item.title}</h3>
            </div>
            </div>
    );
};

export default GalleryCard;