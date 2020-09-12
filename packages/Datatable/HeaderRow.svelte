<script>
  import { getContext } from "svelte";

  const cb = getContext("BBMD:data-table:cb");
</script>

<thead>
  <tr class={cb.elem`header-row`}>
    <slot />
  </tr>
</thead>
