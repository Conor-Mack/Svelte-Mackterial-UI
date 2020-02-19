<script>
  import { onMount } from "svelte";
  import { MDCList } from "@material/list";
  import { MDCRipple } from "@material/ripple";
  import ListItem from "./ListItem.svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("list", ["single-line"]);

  let list = null;
  let instance = null;

  export let variant = "single-line";
  //items: [{text: string | {primary: string, secondary: string}, value: any, selected: bool}...n]
  export let items = [];
  export let singleSelection = true;

  onMount(() => {
    if (!!list) {
      instance = new MDCList(list);
      instance.singleSelection = singleSelection;
      instance.listElements.map(element => new MDCRipple(element));
    }
    return () => {
      instance && instance.destroy();
      instance = null;
    };
  });

  $: useDoubleLine =
    variant == "double-line" &&
    items.every(
      i =>
        typeof i.text == "object" && (primary in i.text && secondary in i.text)
    );

  $: modifiers = { variant };
  $: props = { modifiers };
  $: listClass = cb.build({ props });
</script>

<div class={listClass}>
  {#each items as item, i}
    <ListItem {item} {useDoubleLine} />
  {/each}
</div>
