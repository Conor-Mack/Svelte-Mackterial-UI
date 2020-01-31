<script>
  import ClassBuilder from "../ClassBuilder.js";

  export let variant = ""; //mdc
  export let colour = "primary"; //custom
  export let size = "medium"; //custom

  export let text = "";
  export let disabled = false;

  const cb = new ClassBuilder("button", ["primary", "medium"]);

  let sizeCls = `bbmd-mdc-button--size-${size}`;

  let blockModifiers = !!variant ? [variant] : null;

  // {modifiers:[] (mdc), custom:[] (bbmd), extra:[] (any)}

  let blockClasses = cb.blocks(blockModifiers);
</script>

<button class={`${blockClasses} ${sizeCls}`} {disabled}>
  <div class={cb.elements('ripple')} />
  <span class={cb.elements('label')}>{text}</span>
</button>
