<script>
  import CardTitle from "./CardTitle.svelte";
  import CardText from "./CardText.svelte";
  import Icon from "../Common/Icon.svelte";
  export let title = "";
  export let subtitle = "";

  $: useSubtitle = !!subtitle;
</script>

<style>
  .card-header {
    display: flex;
    flex-flow: column nowrap;
    padding: 8px 0px;
  }
</style>

<div class="card-header">
  <CardTitle>{title}</CardTitle>
  {#if useSubtitle}
    <CardText>{subtitle}</CardText>
  {/if}
</div>
