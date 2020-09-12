<script>
  import { getContext } from "svelte";
  const cb = getContext("BBMD:data-table:cb");

  const elementName = "header-cell";
  export let numeric = false;

  let modifiers = { numeric };
  let props = { modifiers };

  const cellClass = cb.build({ elementName, props });
</script>

<th class={cellClass} role="columnheader" scope="col">
  <slot />
</th>
