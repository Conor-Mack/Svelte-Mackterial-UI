<script>
  import shortid from "shortid";
  import {
    onMount,
    getContext,
    setContext,
    createEventDispatcher,
  } from "svelte";
  import { MDCList } from "@material/list";
  import { MDCRipple } from "@material/ripple";
  import ClassBuilder from "../ClassBuilder.js";

  const dispatch = createEventDispatcher();

  const cb = new ClassBuilder("list");

  let list = null;
  let instance = null;

  const handleSelect = (items) => dispatch("select", items);

  export let twoLine = false;
  export let singleSelection = false;

  let role = "listbox";

  onMount(() => {
    if (list) {
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

  $: modifiers = { twoLine };
  $: props = { modifiers };
  $: listClass = cb.build({ props });
</script>

<ul bind:this={list} class={listClass} {role}>
  <slot />
</ul>
