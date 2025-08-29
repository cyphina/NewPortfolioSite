import { JSX } from "solid-js";
import Gallery from "./Gallery";

export default function Main(props: any): JSX.Element {
  const images = import.meta.glob("/src/images/MainPageGallery/*.jpg", {
    eager: true,
  });

  return (
    <div>
      <Gallery imagesGlob={images} />
    </div>
  );
}
