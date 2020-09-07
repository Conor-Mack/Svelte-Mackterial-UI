<script>
  import { Sub1 } from "@BBMD";
  import { buildStyle } from "./helpers.js";
  export let title = "";
  export let orientation = "row";
  export let width = null;
  //TODO: differentiation header styles from group with some stying (bolding, color, underline maybe)

  $: style = buildStyle({ width });
</script>

<style>
  .group {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: row;
    gap: 10px;
  }

  .column {
    flex-direction: column;
  }
</style>

<div class="group" {style}>
  <Sub1>{title}</Sub1>
  <div class="content" class:column={orientation !== 'row'}>
    <slot />
  </div>
</div>
