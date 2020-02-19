<script>
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("list-item");

  export let item = null;
  export let useDoubleLine = false;

  $: modifiers = { selected: item.selected };
  $: props = { modifiers };
  $: listClass = cb.build({ props });
</script>

<li class={listClass} tabindex="0">
  <span class={cb.elem`text`}>
    {#if useDoubleLine}
      <span class={cb.elem`primary-text`}>{item.primary}</span>
      <span class={cb.elem`secondary-text`}>{item.secondary}</span>
    {:else}{item}{/if}
  </span>
</li>
