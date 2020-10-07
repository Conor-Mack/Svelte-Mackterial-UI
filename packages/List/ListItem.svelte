<script>
  import {
    onMount,
    setContext,
    getContext,
    createEventDispatcher,
  } from "svelte";
  import Icon from "../Common/Icon.svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const dispatch = createEventDispatcher();

  const cb = new ClassBuilder("list-item");

  const handleClick = (item) => {
    selected = !selected;
    dispatch("click", item);
  };

  let context = getContext("BBMD:list:context");
  let group = null;

  export let text = "";
  export let secondaryText = "";
  export let selected = false;

  export let disabled = false;
  export let actionElement = null;
  export let leadingIcon = "";
  export let trailingIcon = "";

  let role = "option";
  let extras = [];
  let iconClass = "mdc-list-item__graphic";

  onMount(() => {
    if (context === "menu") {
      role = "menuitem";
      iconClass += " mdc-menu__selection-group-icon";
    }
    if (actionElement) {
      setContext("BBMD:input:context", "list-item");
    }
  });

  $: if (context === "menu" && selected) {
    extras = ["mdc-menu-item--selected"];
  }

  $: modifiers = {
    selected: !actionElement ? selected : null,
    disabled: disabled,
  };
  $: props = { modifiers, extras };
  $: listItemClass = cb.build({ props });
</script>

<li
  class={listItemClass}
  {role}
  aria-selected={selected}
  tabindex="0"
  on:click={handleClick}>
  {#if leadingIcon}
    <span class={iconClass} aria-hidden="true">
      <Icon>{leadingIcon}</Icon>
    </span>
  {/if}
  <span class={cb.elem`ripple`} />
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
    <span class="mdc-list-item__meta" aria-hidden="true">
      <Icon>{trailingIcon}</Icon>
    </span>
  {/if}
</li>
