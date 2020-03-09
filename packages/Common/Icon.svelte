<script>
  import { getContext } from "svelte";

  export let icon = "";
  export let onClick = () => {};

  let iconContext = getContext("BBMD:icon:context");
  let cls = iconContext
    ? `material-icons mdc-${iconContext}__icon`
    : "material-icons";
</script>

<i on:click={onClick} class={cls}>{icon}</i>
