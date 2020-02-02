<script>
  import { setContext } from "svelte";
  import Icon from "../Icon";
  import ClassBuilder from "../ClassBuilder.js";
  const cb = new ClassBuilder("button", ["primary", "medium"]);

  export let variant = "raised";
  export let colour = "primary";
  export let size = "medium";

  export let href = "";
  export let icon = "";
  export let trailingIcon = false;

  export let text = "";
  export let disabled = false;

  $: if (!!icon) {
    setContext("BBMD:icon:context", "button");
  }

  $: renderLeadingIcon = !!icon && !trailingIcon;
  $: renderTrailingIcon = !!icon && trailingIcon;

  let blockClasses = cb.blocks({
    modifiers: !href ? [variant] : null,
    customs: { size, colour }
  });
</script>

<!-- 
TODO: Make button work with ripple action (this needs to be rolled out throughout library)
TODO: ? how would href button handle linking via the href?
 -->
{#if href}
  <a class={blockClasses} {href} on:click>
    <span class={cb.elements('label')}>{text}</span>
  </a>
{:else}
  <button class={blockClasses} {disabled} on:click>
    {#if renderTrailingIcon}
      <Icon {icon} />
    {/if}
    <div class={cb.elements('ripple')} />
    <span class={cb.elements('label')}>{text}</span>
    {#if renderTrailingIcon}
      <Icon {icon} />
    {/if}
  </button>
{/if}
