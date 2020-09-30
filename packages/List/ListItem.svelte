<script>
  import {
    onMount,
    setContext,
    getContext,
    createEventDispatcher,
  } from "svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const dispatch = createEventDispatcher();

  const cb = new ClassBuilder("list-item");

  const handleClick = (item) => {
    selected = !selected;
    dispatch("click", item);
  };

  let group = null;

  export let text = "";
  export let secondaryText = "";
  export let selected = false;

  export let disabled = false;
  export let actionElement = null;
  export let leadingIcon = "";
  export let trailingIcon = "";

  let role = "option";

  onMount(() => {
    let context = getContext("BBMD:list:context");

    if (context === "menu") {
      role = "menuitem";
    }
    if (actionElement) {
      setContext("BBMD:input:context", "list-item");
    }
  });

  $: modifiers = {
    selected: !actionElement ? selected : null,
    disabled: disabled,
  };
  $: props = { modifiers };
  $: listItemClass = cb.build({ props });
</script>

<li
  class={listItemClass}
  role="option"
  aria-selected={selected}
  tabindex="0"
  on:click={handleClick}>
  {#if leadingIcon}
    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">
      {leadingIcon}
    </span>
  {/if}
  <span class={cb.elem`text`}>
    {#if secondaryText}
      <span class={cb.elem`primary-text`}>{text}</span>
      <span class={cb.elem`secondary-text`}>{secondaryText}</span>
    {:else}{text}{/if}
  </span>

  {#if actionElement}
    <svelte:component
      this={actionElement}
      checked={selected}
      {disabled}
      {group} />
  {:else if trailingIcon}
    <span class="mdc-list-item__meta material-icons" aria-hidden="true">
      {trailingIcon}
    </span>
  {/if}
</li>
