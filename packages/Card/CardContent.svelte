<script>
  import { buildStyle } from "helpers";
  export let padding = "16px";

  $: style = buildStyle({ padding });
</script>

<div {style} on:click>
  <slot />
</div>
