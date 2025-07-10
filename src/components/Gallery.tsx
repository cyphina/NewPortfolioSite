import { createSignal, For, JSX } from "solid-js";

interface GalleryProps {
  // at build time grab every file in this folder that matches this pattern and make them accessible to me on a map.
  imagesGlob: Record<string, unknown>;
}

export default function Gallery(props: GalleryProps): JSX.Element {
  const [curImgIndex, setCurImgIndex] = createSignal(0);
  const [showModal, setShowModal] = createSignal(false);
  const [showGalleryNav, setShowGalleryNav] = createSignal(false);

  const slides = [];

  const imagePaths = Object.values(props.imagesGlob).map(
    (mod: any) => mod.default
  );

  const imagePath = () => {
    const curImgIndexValue = curImgIndex();
    if (curImgIndexValue >= 0 && curImgIndexValue < imagePaths.length) {
      return imagePaths[curImgIndexValue];
    }
    return "";
  };

  // SolidJS sets up one listener in the document or window and when you click anything the global
  // listener receives the event.
  // Solid walks up the DOM tree from event.target, and checks if the element has a delegated Solid handler
  // If it does it runs your handler. This is more optimized for memory and initial time setup. Slightly slower for updates.
  // It also uses [] syntax to pass arguments without new closure for events since we typically don't make
  // those reactive if we use onClicked instead of on:click.

  const onGalleryClicked = (_data: any, _event: Event) => {
    setShowModal(!showModal());
  };

  const onNavBarItemClicked = (data: number, _event: Event) => {
    setCurImgIndex(data);
  };

  const onMouseEnter = (_data: any, _event: Event) => {
    setShowGalleryNav(true);
  };

  const onMouseLeave = (_data: any, _event: Event) => {
    setShowGalleryNav(false);
  };

  console.log(imagePaths);

  return (
    <div
      class="overflow-hidden w-full flex-col relative"
      onMouseEnter={[onMouseEnter, undefined]}
      onMouseLeave={[onMouseLeave, undefined]}
    >
      <div style="height: 32rem">
        <button class="" onClick={[onGalleryClicked, undefined]}>
          <img
            src={imagePath()}
            alt="Missing"
            class="object-cover h-full w-full"
            loading="lazy"
          />
        </button>
      </div>
      <div
        class="flex pl-1 pr-3 absolute bottom-0 justify-end items-center left-0 bg-opacity-50 bg-black w-full h-32 overflow-x-auto overflow-y-hidden"
        style={showGalleryNav() ? "opacity: 1" : "opacity: 0"}
      >
        <div class="flex">
          {imagePaths.map((item, index) => (
            <img
              onClick={[onNavBarItemClicked, index]}
              src={item}
              alt="Missing"
              class="object-cover h-24 w-40 mx-2 cursor-pointer hover:opacity-75"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function GameGallery() {
  const images = import.meta.glob("/public/images/GameImages/*.jpg", {
    eager: true,
  });

  return <Gallery imagesGlob={images} />;
}

export function ToolsGallery() {
  const images = import.meta.glob("/public/images/ToolImages/*.png", {
    eager: true,
  });

  return <Gallery imagesGlob={images} />;
}
