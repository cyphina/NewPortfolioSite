import { createSignal, For, JSX, onCleanup, onMount } from "solid-js";

interface GalleryProps {
  // at build time grab every file in this folder that matches this pattern and make them accessible to me on a map.
  imagesGlob: Record<string, unknown>;
}

export default function Gallery(props: GalleryProps): JSX.Element {
  const [curImgIndex, setCurImgIndex] = createSignal(0);
  const [showModal, setShowModal] = createSignal(false);
  const [showGalleryNav, setShowGalleryNav] = createSignal(false);

  let galleryContainerRef!: HTMLDivElement;

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

  onMount(() => {
    const onClick = (e: MouseEvent) => {
      if (!galleryContainerRef.contains(e.target as Node)) {
        setShowGalleryNav(false);
      }
    };
    document.addEventListener("click", onClick);
    onCleanup(() => document.removeEventListener("click", onClick));
  });

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

  const onPointerDown = (_data: any, _event: Event) => {
    setShowGalleryNav(true);
  };

  const onPointerUp = (_data: any, _event: Event) => {
    setShowGalleryNav(false);
  };

  return (
    <div class="flex flex-col">
      <div
        class="overflow-hidden relative"
        onPointerDown={[onPointerDown, undefined]}
        ref={galleryContainerRef}
      >
        <div>
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
          class="flex pl-1 pr-3 absolute bottom-0 justify-end items-center left-0 w-full h-1/5 overflow-x-auto overflow-y-hidden"
          style={
            showGalleryNav()
              ? "opacity: 1; scrollbar-color: #131414e1 #13505Be1;"
              : "opacity: 0"
          }
        >
          <div class="flex h-full">
            {imagePaths.map((item, index) => (
              <img
                onClick={[onNavBarItemClicked, index]}
                src={item}
                alt="Missing"
                class="object-cover mx-2 cursor-pointer hover:opacity-75"
                style="width: 1/4vw"
              />
            ))}
          </div>
        </div>
      </div>
      <div class="mt-1 mb-4 mx-8 border-solid border border-gray-800">
        <div class="text-center text-sm m-1">
          Gallery Might take Some Time to Load. Click on the Gallery to see a navigation bar that can let you change the Picture. Sliding might be a bit awkward on mobile.
        </div>
      </div>
    </div>
  );
}

export function GameGallery() {
  const images = import.meta.glob("/src/images/GameImages/*.jpg", {
    eager: true,
  });

  return <Gallery imagesGlob={images} />;
}

export function ToolsGallery() {
  const images = import.meta.glob("/src/images/ToolImages/*.png", {
    eager: true,
  });

  return <Gallery imagesGlob={images} />;
}

export function ArtworkGallery() {
  const images = import.meta.glob("/src/images/artwork/*.png", {
    eager: true,
  });

  return <Gallery imagesGlob={images} />;
}
