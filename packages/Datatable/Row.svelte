<script>
  import { getContext, createEventDispatcher, setContext } from "svelte";

  const dispatch = createEventDispatcher();

  export let selected = false;

  let row = null;

  const cb = getContext("BBMD:data-table:cb");
  const onRowSelect = getContext("BBMD:data-table:on-row-select");

  let elementName = "row";

  $: modifiers = { selected };
  $: props = { modifiers };
  $: rowClass = cb.build({ elementName, props });

  function rowSelected() {
    selected = !selected;
    let rowData = [...row.children].map((c) => c.innerText);

    onRowSelect(rowData);
  }
</script>

<tr bind:this={row} class={rowClass} on:click={rowSelected}>
  <slot />
</tr>
