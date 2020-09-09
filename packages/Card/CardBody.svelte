<script>
  export let useHoverEffect = true;

  let cls = useHoverEffect ? "card-body mdc-card__primary-action" : "card-body";
</script>

<style>
  .card-body {
    padding: 16px;
  }
</style>

<div on:click class={cls}>
  <slot />
</div>
