<script>
  import { setContext, getContext, onMount } from "svelte";
  import Icon from "../Common/Icon.svelte";
  import ripple from "../Common/Ripple.js";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("button", ["primary", "medium", "text"]);

  export let variant = "text";
  export let colour = "primary";
  export let size = "medium";

  export let href = "";
  export let icon = "";
  export let trailingIcon = false;
  export let fullwidth = false;

  export let text = "";
  export let disabled = false;

  onMount(() => {
    let ctx = getContext("BBMD:button:context");
    extras = [ctx];
  });

  let extras = null;
  let modifiers = {};
  let customs = { size, colour };

  if (!href) modifiers = { variant };

  let props = { modifiers, customs, extras };

  let blockClasses = cb.build({ props });
  const labelClass = cb.elem("label");

  $: if (icon) {
    setContext("BBMD:icon:context", "button");
  }

  $: renderLeadingIcon = !!icon && !trailingIcon;
  $: renderTrailingIcon = !!icon && trailingIcon;
</script>

<style>
  .mdc-button:not(.fullwidth) {
    width: fit-content;
  }
  .fullwidth {
    width: 100%;
  }
</style>

{#if href}
  <a class={blockClasses} {href} on:click>
    <span class={labelClass}>{text}</span>
  </a>
{:else}
  <button
    use:ripple={{ colour }}
    class={blockClasses}
    class:fullwidth
    {disabled}
    on:click>
    {#if renderLeadingIcon}
      <Icon {icon} />
    {/if}
    <span class={labelClass}>{text}</span>
    {#if renderTrailingIcon}
      <Icon {icon} />
    {/if}
  </button>
{/if}
