import { JSX } from "solid-js";
import Gallery from "./Gallery";

export default function Main(props: any): JSX.Element {
  const images = import.meta.glob("/public/images/MainPageGallery/*.jpg", {
    eager: true,
  });

  return (
    <main>
      <div class="mx-4">
        <h1 class="text-7xl text-center my-1 border-b-4 border-black font-bold">
          Unbounded Perceptions
        </h1>
        <h2 class="text-center text-2xl my-4">Welcome to my Site!</h2>
        <Gallery imagesGlob={images} />
        <div class="mt-1 mb-4 mx-8 border-solid border border-gray-200">
          {/* <Gallery {slides} /> */}
          <div class="text-center text-sm m-1">
            Hover and Click on the Gallery to Interact With it!
          </div>
        </div>
        <p>Hi it's Zi here.</p>
        <p>
          I am a developer who's dabbled in a few things but focuses most on
          gameplay development. I've been working on one game solo for the last
          four years. Right now that game is undergoing a large refactoring as I
          attempt to redesign my code from scratch. I was a total klutz when I
          started so things need to be decoupled which I am in the progress of
          doing in my redesign.
        </p>
        <p>
          Despite that, the concept of a few systems are well detailed in the
          game. You could use them as an example of how to do things in Unreal
          if you want. The list of things that I have designed and implemented
          in the game (albeit they may be buggy at the moment due to
          regressions) are listed here:
          <a href="https://github.com/cyphina/UnboundedPerceptions/blob/master/TestLevelDesign.docx">
            Test Plan
          </a>
        </p>
        <p>
          By the way, the background for this site is made by a Japanese artist
          known as AriDuka. If the page is large enough, you can see the
          artist's id, but here's a link to their page:
          <a href="https://twitter.com/13033303?lang=en">AriDuka's Twitter</a>
        </p>
      </div>
    </main>
  );
}
