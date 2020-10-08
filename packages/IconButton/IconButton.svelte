<script>
  import { MDCRipple } from "@material/ripple";
  import {
    onMount,
    setContext,
    getContext,
    createEventDispatcher,
  } from "svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("icon-button", ["medium"]);
  const dispatch = createEventDispatcher();

  setContext("BBMD:icon:context", "mdc-icon-button__icon");

  export let toggle = false;
  let on = false;

  let iconButton, iconRipple;
  let context = getContext("BBMD:icon-button:context");

  export let disabled = false;
  export let href = null;
  export let size = "medium";

  export let label = "";

  onMount(() => {
    if (iconButton) {
      iconRipple = new MDCRipple(iconButton);
      iconRipple.unbounded = true;
    }
  });

  function onButtonClick() {
    dispatch("click", on);
    if (toggle) {
      on = !on;
    }
  }

  $: modifiers = { on };
  $: customs = { size };
  $: props = {
    modifiers,
    customs,
    extras: [context],
  };
  $: iconBtnClass = cb.build({ props });
</script>

{#if href}
  <a
    {href}
    bind:this={iconButton}
    on:click={onButtonClick}
    class={iconBtnClass}
    {disabled}
    role="button"
    aria-label={label}
    tabindex="0">
    <slot />
  </a>
{:else}
  <button
    bind:this={iconButton}
    on:click={onButtonClick}
    on:click
    class={iconBtnClass}
    {disabled}
    role="button"
    aria-label={label}
    tabindex="0">
    <slot />
  </button>
{/if}
