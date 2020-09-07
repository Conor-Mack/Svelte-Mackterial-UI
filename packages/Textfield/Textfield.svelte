<script>
  import { setContext, onMount, createEventDispatcher } from "svelte";
  import { MDCTextField } from "@material/textfield";
  import { MDCLineRipple } from "@material/line-ripple";

  import ClassBuilder from "../ClassBuilder.js";
  import NotchedOutline from "../Common/NotchedOutline.svelte";
  import FloatingLabel from "../Common/FloatingLabel.svelte";
  import HelperText from "./HelperText.svelte";
  import CharacterCounter from "./CharacterCounter.svelte";
  import Icon from "../Common/Icon.svelte";
  import { IconButton } from "../IconButton";

  const cb = new ClassBuilder("text-field", ["primary", "medium"]);

  const dispatch = createEventDispatcher();

  let tf = null;
  export let tfHeight = null;
  let tfInstance = null;

  onMount(() => {
    if (!!tf) tfInstance = new MDCTextField(tf);
    return () => {
      !!tfInstance && tf.tfInstance && tf.tfInstance.destroy();
      tf = null;
    };
  });

  export let label = "";
  export let variant = "standard"; //outlined | filled | standard
  export let disabled = false;
  export let fullwidth = false;
  export let colour = "primary";
  export let size = "medium";
  export let type = "text"; //text or password
  export let required = false;
  export let minLength = null;
  export let maxLength = 255;
  export let helperText = "";
  export let errorText = "";
  export let placeholder = "";
  export let icon = "";
  export let useIconButton = false;
  export let trailingIcon = false;
  export let textarea = false;
  export let rows = 4;
  export let cols = 40;
  export let validation = false;
  export let persistent = false;
  export let value = "";

  //TODO: Is this necessary
  let id = `${label}-${variant}`;

  let modifiers = { fullwidth, disabled, textarea };
  let customs = { colour };

  if (variant == "standard" || fullwidth) {
    customs = { ...customs, variant };
  } else {
    modifiers = { ...modifiers, variant };
  }

  if (!textarea && size !== "medium") {
    customs = { ...customs, size };
  }

  if (!label || fullwidth) {
    modifiers = { ...modifiers, noLabel: "no-label" };
  }

  let useLabel = !!label && (!fullwidth || (fullwidth && textarea));
  let useIcon = !!icon && !textarea && !fullwidth;

  if (useIcon) {
    let iconClass = trailingIcon ? "with-trailing-icon" : "with-leading-icon";
    modifiers = { ...modifiers, iconClass };
  }

  $: useNotchedOutline = variant == "outlined" || textarea;
  $: renderLeadingIcon = useIcon && !trailingIcon;
  $: renderTrailingIcon = useIcon && trailingIcon;

  let props = { modifiers, customs };
  const blockClasses = cb.build({ props });

  function focus(event) {
    tfInstance.focus();
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

<div bind:this={tf} bind:clientHeight={tfHeight} class={blockClasses}>
  {#if textarea}
    <CharacterCounter />
    <textarea
      {id}
      class={cb.elem`input`}
      class:fullwidth
      {disabled}
      {rows}
      {cols}
      {required}
      {placeholder}
      {minLength}
      {maxLength}
      on:change
      {value} />
  {:else}
    <div class="textfield-container" class:fullwidth>
      {#if renderLeadingIcon}
        {#if useIconButton}
          <IconButton
            {icon}
            context="mdc-text-field__icon mdc-text-field__icon--trailing"
            on:click />
        {:else}
          <Icon context="text-field" {icon} />
        {/if}
      {/if}
      <input
        {id}
        {disabled}
        class={cb.elem`input`}
        {type}
        {required}
        placeholder={!!label && fullwidth ? label : placeholder}
        {minLength}
        {maxLength}
        on:change
        {value}
        aria-label={`Textfield ${variant}`}
        on:focus={focus} />
      {#if renderTrailingIcon}
        {#if useIconButton}
          <IconButton
            {icon}
            context="mdc-text-field__icon mdc-text-field__icon--trailing"
            on:click />
        {:else}
          <Icon context="text-field" {icon} />
        {/if}
      {/if}
      {#if variant !== 'outlined'}
        <div class="mdc-line-ripple" />
      {/if}
    </div>
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
<HelperText
  {persistent}
  {validation}
  {errorText}
  {helperText}
  useCharCounter={!!maxLength && !textarea} />
