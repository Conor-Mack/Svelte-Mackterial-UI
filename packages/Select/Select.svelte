<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { MDCSelect } from "@material/select";

  import HelperText from "./HelperText.svelte";
  import NotchedOutline from "../Common/NotchedOutline.svelte";
  import FloatingLabel from "../Common/FloatingLabel.svelte";
  import ClassBuilder from "../ClassBuilder.js";

  const dispatch = createEventDispatcher();
  const cb = new ClassBuilder("select", ["filled"]);

  let select;
  let instance;

  export let value = "";

  export let shaped = false;
  export let width = "400px";
  export let variant = "filled";
  export let disabled = false;
  export let required = false;
  export let label = "";
  export let helperText = "";
  export let persistent = false;

  onMount(() => {
    if (!!select) {
      instance = new MDCSelect(select);
      return () => {
        instance && instance.destroy();
        instance = null;
      };
    }
  });

  function handleSelect() {
    dispatch("select", value);
  }

  $: useNotchedOutline = variant === "outlined";

  $: modifiers = { variant, disabled, required, noLabel: !label };
  $: props = { modifiers };
  $: selectClass = cb.build({ props });
</script>

<div
  bind:this={select}
  class={selectClass}
  class:shaped-filled={shaped && variant === 'filled'}
  class:shaped-outline={shaped && variant === 'outlined'}>
  <div class="mdc-select__anchor" style={`width: ${width}`}>
    <i class="mdc-select__dropdown-icon" />
    <div class="mdc-select__selected-text" aria-required={required} />

    {#if useNotchedOutline}
      <NotchedOutline>
        <FloatingLabel text={label} />
      </NotchedOutline>
    {:else}
      <FloatingLabel text={label} />
      <div class="mdc-line-ripple" />
    {/if}
  </div>

  <div
    class="mdc-select__menu mdc-menu mdc-menu-surface"
    role="listbox"
    style={`width: ${width}`}>
    <ul bind:this={select} class="mdc-list">
      <slot />
    </ul>
  </div>
</div>
<!-- TODO: Test -->
<HelperText text={helperText} {persistent} />
