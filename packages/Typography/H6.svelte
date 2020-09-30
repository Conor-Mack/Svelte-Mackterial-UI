<script>
  import { buildStyle } from "helpers";

  export let opacity = "";
  export let margin = "";
  export let padding = "";

  $: style = buildStyle({ opacity, margin, padding });
</script>

<h6 {style} class="mdc-typography--headline6">
  <slot />
</h6>
