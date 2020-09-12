<script>
  import { getContext } from "svelte";

  const cb = getContext("BBMD:data-table:cb");
</script>

<tbody class={cb.elem`content`}>
  <slot />
</tbody>
