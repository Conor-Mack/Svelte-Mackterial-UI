<script>
  import Radiobutton from "./Radiobutton.svelte";
  import Label from "../Common/Label.svelte";

  export let name = "radio-group";
  export let label = "";
  export let orientation = "row";
  export let fullwidth = false;
  export let alignEnd = false;

  export let onChange = selected => {};

  export let items = [];

  let selected = null;

  function handleOnClick(item) {
    if (!!selected) selected.selected = false;
    item.selected = true;
    selected = item;
    items = items;
    onChange(selected);
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
          label={item.label}
          selected={item.selected}
          onClick={() => handleOnClick(item)} />
      </div>
    {/each}
  </div>
</div>
