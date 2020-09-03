<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Checkbox from "./Checkbox.svelte";
  import Label from "../Common/Label.svelte";

  const dispatch = createEventDispatcher();

  export let label = "";
  export let orientation = "row";
  export let fullwidth = false;
  export let bold = false;

  export let items = [];

  export let disabled = false;
  export let alignEnd = false;
  export let selected = [];

  onMount(() => {
    items.forEach((item) => {
      if (item.checked && !item.indeterminate) {
        selected.push(item);
      }
    });
  });

  function handleonChange(item) {
    if (!!item.checked) {
      item.checked = !item.checked;
    } else {
      item.checked = true;
    }
    selected = items.filter((i) => i.checked);
    dispatch("change", selected);
  }
</script>

<style>
  .checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .checkbox-group__boxes.row > div:not(:first-child) {
    padding-left: 10px;
  }

  .checkbox-group > div {
    text-align: left;
    flex: 1;
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }

  .column {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
  }

  .fullwidth {
    flex: 1;
    text-align: left;
  }
</style>

<div class="checkbox-group">
  <div class="checkbox-group__label">
    <Label text={label} {bold} />
  </div>
  <div class={`checkbox-group__boxes ${orientation}`}>
    {#each items as item, i}
      <div class:fullwidth>
        <Checkbox
          id={`${item.label}-${i}`}
          {disabled}
          {alignEnd}
          indeterminate={item.indeterminate || false}
          label={item.label}
          checked={item.checked || false}
          on:change={() => handleonChange(item)} />
      </div>
    {/each}
  </div>
</div>
