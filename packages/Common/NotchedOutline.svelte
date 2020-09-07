<script>
  import "@material/notched-outline/mdc-notched-outline.scss";
  export let useLabel = false;
</script>

<div class="mdc-notched-outline">
  <div class="mdc-notched-outline__leading" />
  {#if useLabel}
    <div class="mdc-notched-outline__notch">
      <slot />
    </div>
  {/if}
  <div class="mdc-notched-outline__trailing" />
</div>
