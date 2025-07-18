import { JSX } from "solid-js";
import Tabs from "./Tabs";
import Logo from "./Logo";

{
  /* <script>
    import Breadcrumb from './Breadcrumb.svelte';
    import Hamburger from './Hamburger.svelte';
    import Logo from './Logo.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    import Tabs from './Tabs.svelte';
    //import menu from './Menu.svelte';

    let openSidebar = false;

    const items = ['Blog', 'Game', 'Story', 'Tools', 'Artwork', 'About'];
    let activeItem = null;

    function onTabChange(e) {
        activeItem = e.detail;
    }

    function resetTab() {
        activeItem = null;
    }
</script>

<header class="flex h-20 pl-2 justify-between bg-black items-center text-gray-600">
    <nav class="flex">
        <Hamburger bind:open="{openSidebar}" />
        <Logo on:resetTabs="{resetTab}" />
        <Tabs {items} {activeItem} on:tabChange="{onTabChange}" />
    </nav>
</header>
<Sidebar bind:open="{openSidebar}" /> */
}

export default function Navbar(): JSX.Element {
  const items = ["Game", "Story", "Tools", "Artwork", "About", "Contact"];

  return (
    <header>
      <nav class="flex gap-2 flex-wrap justify-center w-full h-20 pl-2 justify-between bg-black items-center text-gray-600">
        <Logo />
        <Tabs items={items} />
      </nav>
    </header>
  );
}
