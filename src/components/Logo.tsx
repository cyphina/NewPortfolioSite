import { JSX } from "solid-js";

export default function Logo(): JSX.Element {
  return (
    <a href="/">
      <svg class="w-12 h-12">
        <image href="/images/wooper.png" class="w-12 h-12"></image>
      </svg>
    </a>
  );
}
