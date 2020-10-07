<script>
  import ripple from "../Common/Ripple.js";

  import { getContext } from "svelte";

  let context = getContext("BBMD:icon:context");

  export let on = false;

  let cls = context ? `material-icons ${context}` : "material-icons";
  if (context && on) {
    cls += ` ${context}--on`;
  }
</script>

<i class={cls} on:click><slot /></i>
