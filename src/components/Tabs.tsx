import { useLocation } from "@solidjs/router";
import { Index, JSX } from "solid-js";

interface TabsProps {
  items: string[];
}

export default function Tabs(props: TabsProps): JSX.Element {
  const location = useLocation();

  const itemClass = (item: Accessor<string>) => {
    const itemValue = item();
    const locationValue = location.pathname;

    if (itemValue == locationValue) {
      return "COLOR-ROSE-900";
    }

    return "";
  };

  return (
    <ul class="flex flex-row gap-2 flex-wrap">
      <Index
        each={props.items}
        children={(item) => {
          return (
            <li>
              <div class={itemClass(item)}>
                <a href={`/${item()}`}>{item()}</a>
              </div>
            </li>
          );
        }}
      ></Index>
    </ul>
  );
}
