<script>
  import { H1, Sub1 } from "../Typography"
  import Icon from "../Common/Icon.svelte"
  export let title = ""
  export let subtitle = ""
  export let icon = ""

  $: useIcon = !!icon
  $: useSubtitle = !!subtitle
</script>

<div class="card-header">
  {#if useIcon}
    <div class="card-header__icon">
      <Icon {icon} />
    </div>
  {/if}
  <div class="card-header__title">
    <H1>{title}</H1>
    {#if useSubtitle}
      <Sub1>{subtitle}</Sub1>
    {/if}
  </div>
</div>

<style>
  .card-header {
    display: flex;
    flex-flow: row nowrap;
  }
</style>
