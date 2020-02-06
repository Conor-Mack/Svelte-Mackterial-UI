<script>
  import { setContext, onMount } from "svelte";
  import { MDCTextField } from "@material/textfield";

  import ClassBuilder from "../ClassBuilder.js";
  import NotchedOutline from "../Common/NotchedOutline.svelte";
  import FloatingLabel from "../Common/FloatingLabel.svelte";
  import Icon from "../Icon.svelte";

  const cb = new ClassBuilder("text-field");

  let tf = null;
  let instance = null;

  onMount(() => {
    if (!!tf) instance = new MDCTextField(tf);
  });

  export let label = "";
  export let variant = "standard"; //outlined | filled | standard
  export let disabled = false;
  export let fullwidth = false;
  export let type = "text"; //text or password
  export let required = false;
  export let minLength = 0;
  export let maxLength = 100;
  export let useCharCounter = false;
  export let helperText = "";
  export let errorText = "";
  export let placeholder = "";
  export let icon = "";
  export let trailingIcon = false;
  export let multiLine = false; //non text-area textfields that expand in height
  export let textarea = false;
  export let rows = 4;
  export let cols = 40;
  export let validation = false;
  export let persistent = false;

  /*   
NOTE: Do not use mdc-text-field--outlined to style a full width text field. 
How is this to be a worry if full-width is a variant?


NOTE: Do not use mdc-line-ripple inside of mdc-text-field if you plan on using mdc-text-field--outlined. Line Ripple should not be included as part of the DOM structure of an outlined text field.
*/

  //Does svelte make this unique in the same way it does classes?
  let id = `${label}-${variant}`;
  let helperClasses = `${cb.block}-helper-text`;

  let modifiers = [];
  let customs;
  variant !== "standard" && (variant !== "outlined" && fullwidth)
    ? modifiers.push(variant)
    : (customs = { variant });

  if (!label) modifiers.push("no-label");
  if (fullwidth) modifiers.push("fullwidth");
  if (disabled) modifiers.push("disabled");
  if (textarea) modifiers.push("textarea");
  if (persistent) helperClasses += ` ${cb.block}-helper-text--persistent`;
  if (validation) helperClasses += ` ${cb.block}-helper-text--validation`;

  // NOTE: Do not use mdc-floating-label within mdc-text-field--fullwidth. Labels should not be included as part of the DOM structure of a full width text field.
  let useLabel = !!label && !fullwidth;
  $: useNotchedOutline = variant == "outlined" || textarea;

  if (icon) {
    setContext("BBMD:icon:context", "text-field");
    trailingIcon
      ? modifiers.push("with-trailing-icon")
      : modifiers.push("with-leading-icon");
  }

  $: renderLeadingIcon = !!icon && !trailingIcon;
  $: renderTrailingIcon = !!icon && trailingIcon;

  const blockClasses = cb.blocks({ modifiers, customs });
  const inputClasses = cb.elements("input");
  console.log("BLOCKS", blockClasses);

  function focus(event) {
    instance.focus();
  }
</script>

<style>
  .textfield-container {
    display: flex;
    flex-direction: column;
    width: 227px;
  }

  .fullwidth {
    width: 100%;
  }
</style>

<!-- 
TODO: How could multilining of textfields be done
TODO: How will budibase handle errors / validation on individual fields?
TODO: Implement line ripple
 -->

<div class="textfield-container" class:fullwidth>
  <div bind:this={tf} class={blockClasses}>
    {#if textarea}
      {#if useCharCounter}
        <div class="mdc-text-field-character-counter">{`0 / ${maxLength}`}</div>
      {/if}
      <textarea
        {id}
        class={inputClasses}
        class:fullwidth
        {disabled}
        {rows}
        {cols}
        {required}
        {placeholder}
        {minLength}
        {maxLength} />
    {:else}
      {#if renderLeadingIcon}
        <Icon {icon} />
      {/if}
      <input
        {id}
        {disabled}
        on:focus={focus}
        class={inputClasses}
        {type}
        {required}
        {placeholder}
        {minLength}
        {maxLength}
        aria-label={`Textfield ${variant}`} />
      {#if renderTrailingIcon}
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
  <div class="mdc-text-field-helper-line">
    <div class={helperClasses}>{!!errorText ? errorText : helperText}</div>
    {#if useCharCounter && !textarea}
      <div class="mdc-text-field-character-counter">{`0 / ${maxLength}`}</div>
    {/if}
  </div>
</div>
