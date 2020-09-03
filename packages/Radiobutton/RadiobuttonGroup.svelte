<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Radiobutton from "./Radiobutton.svelte";
  import Label from "../Common/Label.svelte";

  const dispatch = createEventDispatcher();

  export let name = "radio-group";
  export let label = "";
  export let orientation = "row";
  export let fullwidth = false;
  export let alignEnd = false;

  export let items = [];

  export let group = [];
  export let selected = null;

  onMount(() => {
    let _selected = items.find(i => i.selected);
    if (_selected) selected = _selected;
  });

  function handleOnClick(item) {
    if (selected) selected.selected = false;
    item.selected = true;
    selected = item;
    items = items;
    dispatch("change", selected);
  }
</script>

<style>
  .radiobutton-group {
    display: flex;
    flex-direction: column;
  }

  .radiobutton-group__radios.row > div:not(:first-child) {
    padding-left: 10px;
  }

  .radiobutton-group > div {
    text-align: left;
    flex: 1;
  }
  .row {
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    display: flex;
    flex-flow: column wrap;
  }

  .fullwidth {
    flex: 1;
    text-align: left;
  }
</style>

<div class="radiobutton-group">
  <div class="radiobutton-group__label">
    <Label text={label} bold />
  </div>
  <div class={`radiobutton-group__radios ${orientation}`}>
    {#each items as item, i}
      <div class:fullwidth>
        <Radiobutton
          id={`${item.label}-${i}`}
          {name}
          {alignEnd}
          bind:group
          label={item.label}
          selected={item.selected || false}
          on:click={() => handleOnClick(item)} />
      </div>
    {/each}
  </div>
</div>
