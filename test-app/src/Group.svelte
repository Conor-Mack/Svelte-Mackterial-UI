<script>
  import { Sub1 } from "@BBMD";
  export let title = "";
  //TODO: differentiation header styles from group with some stying (bolding, color, underline maybe)
</script>

<style>
  .group {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
  }

  .content {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }
</style>

<div class="group">
  <Sub1>{title}</Sub1>
  <div class="content">
    <slot />
  </div>
</div>
