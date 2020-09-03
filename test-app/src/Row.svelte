<script>
  import { H5 } from "@BBMD";
  export let title = "";

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
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
  }
</style>

<div class="row">
  <H5>{title}</H5>

  <div class="content">
    <slot />
  </div>

  <hr />

</div>
