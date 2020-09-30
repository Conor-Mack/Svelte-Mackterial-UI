<script>
  import { buildStyle } from "helpers";
  import ClassBuilder from "../ClassBuilder.js";

  export let width = "auto";
  export let height = "auto";
  export let variant = "standard";

  const cb = new ClassBuilder("card", ["standard"]);

  $: modifiers = { variant };
  $: props = { modifiers };
  $: cardClass = cb.build({ props });

  $: style = buildStyle({ width, height });
</script>

<div {style} class={cardClass}>
  <slot />
</div>
