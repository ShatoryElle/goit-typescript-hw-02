// import s from "./ImageGallery.module.css";

// interface ImageCardProps {
//   src: string;
//   alt: string;
//   onClick: () => void;
// }

// const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
//   return (
//     <div className={s.card} onClick={onClick}>
//       <img className={s.image} src={src} alt={alt} />
//     </div>
//   );
// };

// export default ImageCard;

import React from "react";
import ImageCard from "../ImageCard/ImageCard"; // Імпортуємо ваш компонент ImageCard
import { ImageType } from "../App/App"; // Імпортуємо тип Image з App.tsx
import s from "./ImageGallery.module.css"; // Ваші стилі для галереї

interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (imageUrl: string, imageAlt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className={s.gallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => onImageClick(image.urls.full, image.alt_description)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
