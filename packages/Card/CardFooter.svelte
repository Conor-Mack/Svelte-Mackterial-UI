<script>
  import { onMount } from "svelte"
  let footer
  export let _bb
  export let padding = "5px"

  onMount(() => {
    _bb.setContext(
      "BBMD:icon-button:context",
      "mdc-card__action mdc-card__action--icon"
    )
    _bb.setContext(
      "BBMD:button:context",
      "mdc-card__action mdc-card__action--button"
    )
  })

  $: footer && _bb.attachChildren(footer)
</script>

<div bind:this={footer} style={`padding: ${padding}`} class="mdc-card__actions">
  <slot />
</div>
