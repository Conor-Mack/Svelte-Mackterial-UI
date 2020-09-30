<script>
  import { buildStyle } from "helpers";

  export let opacity = "";
  export let margin = "";
  export let padding = "";

  $: style = buildStyle({ opacity, margin, padding });
</script>

<h4 {style} class="mdc-typography--headline4">
  <slot />
</h4>
