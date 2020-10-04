<script>
  import { H5 } from "@BBMD";
  export let title = "";
  export let style = "";

  //TODO: differentiation header styles from group with some stying (bolding, color, underline maybe)
</script>

<style>
  .row {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin: 5px 0px;
    padding: 10px;
    border-bottom: 1px solid #c1c1c1;
  }

  .content {
    flex: 1;
    padding: 20px 0px;
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    align-items: flex-start;
  }
</style>

<div class="row">
  <H5>{title}</H5>

  <div {style} class="content">
    <slot />
  </div>

  <hr />
</div>
