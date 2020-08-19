<script>
  export let isPrimaryAction = false
  export let onClick = () => {}

  let cardBody
  let cls = isPrimaryAction ? "mdc-card__primary-action" : ""
</script>

<div bind:this={cardBody} class={cls}>
  <slot />
</div>
