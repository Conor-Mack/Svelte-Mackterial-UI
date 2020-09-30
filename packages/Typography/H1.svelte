<script>
  import { buildStyle } from "helpers";

  export let opacity = "";
  export let margin = "";
  export let padding = "";

  $: style = buildStyle({ opacity, margin, padding });
</script>

<h1 {style} class="mdc-typography--headline1">
  <slot />
</h1>
