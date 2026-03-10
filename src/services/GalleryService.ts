import type { GalleryItem } from "../types/Gallery";


export const GalleryItemsServices = async ():Promise<GalleryItem[]> => {
    

    return [
        {
            id: 1,
            title: "Appreciation from Sainik School",
            year: 2025,
            event: "Education",
            image: "/images/gallery/1.jpg",
        },
        {
            id: 2,
            title: "12th National Conference on Disability",
            year: 2025,
            event: "Conference",
            image: "/images/gallery/2.jpg",
        },
    ]
}