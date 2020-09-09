<script>
  import ClassBuilder from "../ClassBuilder.js";

  export let width = "350px";
  export let height = "auto";
  export let variant = "standard";

  const cb = new ClassBuilder("card", ["standard"]);

  $: modifiers = { variant };
  $: props = { modifiers };
  $: cardClass = cb.build({ props });
</script>

<div style={`width: ${width}; height: ${height}`} class={cardClass}>
  <slot />
</div>
