<script>
  import { getContext, onMount } from "svelte";
  const cb = getContext("BBMD:data-table:cb");

  const elementName = "cell";
  let cell = null;

  export let numeric = false;
  export let element = null;
  export let elementProps = {};

  let modifiers = { numeric };
  let props = { modifiers };

  const cellClass = cb.build({ elementName, props });
</script>

{#if !element}
  <td bind:this={cell} class={cellClass}>
    <slot />
  </td>
{:else}
  <td class={cellClass}>
    <svelte:component this={element} {...elementProps} />
  </td>
{/if}
