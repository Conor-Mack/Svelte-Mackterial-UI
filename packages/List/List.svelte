<script>
  import { onMount, getContext } from "svelte";
  import { MDCList } from "@material/list";
  import { MDCRipple } from "@material/ripple";
  import ListItem from "./ListItem.svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("list", ["one-line"]);

  let list = null;
  let instance = null;

  //TODO: Build list from data. Optional to build static.
  export let data = [];

  //TODO: use svelte events
  export let onSelect = (selectedItems) => {};

  export let variant = "one-line";
  //items: [{text: string | {primary: string, secondary: string}, value: any, selected: bool}...n]
  export let items = [];
  export let singleSelection = false;

  export let actionElement = null;

  let role = "listbox";

  onMount(() => {
    if (!!list) {
      instance = new MDCList(list);
      instance.singleSelection = singleSelection;
      instance.listElements.map((element) => new MDCRipple(element));
    }

    let context = getContext("BBMD:list:context");
    if (context === "menu") {
      role = "menu";
    }

    return () => {
      instance && instance.destroy();
      instance = null;
    };
  });

  function handleSelectedItem(item) {
    if (!item.disabled) {
      if (singleSelection || actionElement === "radiobutton") {
        items.forEach((i) => {
          if (i.selected) i.selected = false;
        });
      }

      let idx = items.indexOf(item);
      if (!!item.selected) {
        items[idx].selected = !item.selected;
      } else {
        items[idx].selected = true;
      }

      //svelte events
      onSelect(items.filter((item) => item.selected));
    }
  }

  $: doubleLine =
    variant == "two-line" &&
    items.every((i) => typeof i.text == "object" && "primary" in i.text);

  $: modifiers = { variant };
  $: props = { modifiers };
  $: listClass = cb.build({ props });
</script>

<ul class={listClass} {role}>
  {#each items as item, i}
    <ListItem
      {item}
      {doubleLine}
      {actionElement}
      onClick={() => handleSelectedItem(item)} />
    {#if item.divider}
      <li role="separator" class="mdc-list-divider" />
    {/if}
  {/each}
</ul>
