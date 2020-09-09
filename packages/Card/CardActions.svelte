<script>
  import { onMount, setContext } from "svelte";
  export let padding = "5px";

  onMount(() => {
    setContext(
      "BBMD:icon-button:context",
      "mdc-card__action mdc-card__action--icon"
    );
    setContext(
      "BBMD:button:context",
      "mdc-card__action mdc-card__action--button"
    );
  });
</script>

<div style={`padding: ${padding}`} class="mdc-card__actions">
  <slot />
</div>
