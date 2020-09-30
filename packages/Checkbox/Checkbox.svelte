<script>
  import { onMount, onDestroy, getContext } from "svelte";
  import Formfield from "../Common/Formfield.svelte";
  import { fieldStore } from "../Common/FormfieldStore.js";
  import ClassBuilder from "../ClassBuilder.js";
  import { MDCCheckbox } from "@material/checkbox";

  export let id = "";
  export let label = "";
  export let value = "";
  export let group = null;
  export let checked = false;
  export let disabled = false;
  export let alignEnd = false;
  export let indeterminate = false;

  let instance = null;
  let checkbox = null;
  let context = null;

  onMount(() => {
    context = getContext("BBMD:input:context");
    if (!!checkbox) {
      instance = new MDCCheckbox(checkbox);
      instance.indeterminate = indeterminate;
      if (context !== "list-item") {
        //TODO - Context - Check this
        // let fieldStore = getContext("BBMD:field-element");
        // fieldStore.setInput(instance);
      }
    }
  });

  function handleCheck(event) {
    let value = event.target.value;
    if (group) {
      let idx = group.indexOf(value);
      if (idx > -1) {
        group.splice(idx, 1);
      } else {
        group.push(value);
      }
      group = group;
    } else {
      checked = !checked;
    }
  }

  let extras = null;

  $: if (context === "list-item") {
    extras = ["mdc-list-item__meta"];
  }

  const cb = new ClassBuilder("checkbox");
  $: modifiers = { disabled };
  $: props = { modifiers, extras };

  $: blockClass = cb.build({ props });
  $: isChecked = group ? group.includes(value) : checked;
</script>

<!-- TODO: Customizing Colour and Density -->

{#if context !== 'list-item' && label}
  <Formfield {label} {id} {alignEnd}>
    <div bind:this={checkbox} class={blockClass}>
      <input
        type="checkbox"
        {value}
        checked={isChecked}
        on:change={handleCheck}
        on:change
        class={cb.elem`native-control`}
        {id}
        {disabled} />
      <div class={cb.elem`background`}>
        <svg class={cb.elem`checkmark`} viewBox="0 0 24 24">
          <path
            class={cb.elem`checkmark-path`}
            fill="none"
            d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class={cb.elem`mixedmark`} />
      </div>
      <div class={cb.elem`ripple`} />
    </div>
  </Formfield>
{:else}
  <div bind:this={checkbox} class={blockClass}>
    <input
      type="checkbox"
      checked={isChecked}
      on:change={handleCheck}
      on:change
      {value}
      class={cb.elem`native-control`}
      {id}
      {disabled} />
    <div class={cb.elem`background`}>
      <svg class={cb.elem`checkmark`} viewBox="0 0 24 24">
        <path
          class={cb.elem`checkmark-path`}
          fill="none"
          d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
      <div class={cb.elem`mixedmark`} />
    </div>
    <div class={cb.elem`ripple`} />
  </div>
{/if}
