<script>
  import { getContext } from "svelte";

  export let headercell = false;
  export let numeric = false;

  const cb = getContext("BBMD:data-table:cb");

  let elementName = headercell ? "header-cell" : "cell";
  let modifiers = { numeric };
  let props = { modifiers };
  let cellClass = cb.build({ elementName, props });
</script>

{#if headercell}
  <th class={cellClass} role="columnheader" scope="col">
    <slot />
  </th>
{:else}
  <td class={cellClass}>
    <slot />
  </td>
{/if}
