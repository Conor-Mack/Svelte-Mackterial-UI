<script>
  import { setContext, onMount } from "svelte";
  import { MDCTextField } from "@material/textfield";

  import ClassBuilder from "../ClassBuilder.js";
  import NotchedOutline from "../Common/NotchedOutline.svelte";
  import FloatingLabel from "../Common/FloatingLabel.svelte";
  import Icon from "../Icon.svelte";

  const cb = new ClassBuilder("text-field");

  let textfield;
  let instance = null;

  onMount(() => {
    if (!!textfield) instance = new MDCTextField(textfield);
  });

  export let label = "Surname";
  export let variant = ""; //outlined | filled | disabled
  export let type = "text"; //text or password
  export let required = false;
  export let minLength = 0;
  export let maxLength = 100;
  export let useCharCounter = true;
  export let helperText = "";
  export let errorText = "";
  export let placeholder = "";
  export let icon = "";
  export let trailingIcon = false;
  export let multiLine = false;
  export let textArea = false;
  export let rows = 8;
  export let cols = 40;

  let id = `${label}-${variant}`;

  // NOTE: Do not use mdc-floating-label within mdc-text-field--fullwidth. Labels should not be included as part of the DOM structure of a full width text field.
  let useLabel = !!label && !variant !== "fullwidth";
  $: useNotchedOutline = variant == "outlined";

  let useLeadingIcon = !!icon && !trailingIcon;
  let useTrailingIcon = !!icon && trailingIcon;

  let modifiers = [variant];

  if (icon) {
    setContext("BBMD:icon:context", "text-field");
    trailingIcon
      ? modifiers.push("with-trailing-icon")
      : modifiers.push("with-leading-icon");
  }

  if (!label) modifiers.push("no-label");

  const blockClasses = cb.blocks({ modifiers });
  const inputClasses = cb.elements("input");

  function focus(event) {
    instance.focus();
  }

  $: console.log("Textfield", textfield);
</script>

<div class="textfield-container">
  <div bind:this={textfield} class={blockClasses}>
    {#if textArea}
      {#if useCharCounter}
        <div class="mdc-text-field-character-counter">{`0 / ${maxLength}`}</div>
      {/if}
      <textarea
        {id}
        class={inputClasses}
        {rows}
        {cols}
        {required}
        {placeholder}
        {minLength}
        {maxLength} />
    {:else}
      {#if useLeadingIcon}
        <Icon {icon} />
      {/if}
      <input
        {id}
        on:focus={focus}
        class={inputClasses}
        {type}
        {required}
        {placeholder}
        {minLength}
        {maxLength}
        aria-label={`Textfield ${variant}`} />
      {#if useTrailingIcon}
        <Icon {icon} />
      {/if}
    {/if}
    {#if useNotchedOutline}
      <NotchedOutline {useLabel}>
        {#if useLabel}
          <FloatingLabel forInput={id} text={label} />
        {/if}
      </NotchedOutline>
    {:else if useLabel}
      <FloatingLabel forInput={id} text={label} />
    {/if}
  </div>
  <!-- <div class="mdc-text-field-helper-line">
    <div
      class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">
      {!!errorText ? errorText : helperText}
    </div>
    {#if useCharCounter && !textArea}
      <div class="mdc-text-field-character-counter">{`0 / ${maxLength}`}</div>
    {/if}
  </div> -->
</div>
