import { JSX } from "solid-js";

/**
 * Fixed means stick relative to screen. bottom means bottom of the screen.
 */
export default function Footer(): JSX.Element {
  return (
    <footer class="py-5 text-center bg-black fixed bottom-0 w-full">
      <div
        class="font-medium inline-block p-2.5 border-t-2 border-solid"
        style="color: #c21818"
      >
        &copy Copyright 2020-(Till I'm Dead) Zi Ha
      </div>
    </footer>
  );
}
