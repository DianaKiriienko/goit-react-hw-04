import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick}) => {

return (
     <ul className={css.imageGallery}>
       {images.map((image) => (
         <ImageCard
           key={image.id}
           imageUrl={image.small}
           alt={image.alt}
           onClick={() => onClick(image)} />
      ))}
    </ul>
  );
};

 export default ImageGallery;