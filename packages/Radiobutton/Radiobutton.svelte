<script>
  import { onMount, onDestroy, getContext } from "svelte";
  import Formfield from "../Common/Formfield.svelte";
  import ClassBuilder from "../ClassBuilder.js";
  import { MDCRadio } from "@material/radio";

  export let onClick = item => {};

  export let id = "";
  export let label = "";
  export let names = "radios";
  export let selected = false;
  export let disabled = false;
  export let alignEnd = false;

  let instance = null;
  let radiobtn = null;

  onMount(() => {
    if (!!radiobtn) {
      instance = new MDCRadio(radiobtn);
      let fieldStore = getContext("BBMD:field-element");
      fieldStore.setInput(instance);
    }
  });

  let extras = "";
  extras = [getContext("BBMD:input:context")];

  const cb = new ClassBuilder("radio");
  let modifiers = { disabled };
  let props = { modifiers, extras };

  const blockClass = cb.build({ props });
</script>

<Formfield {id} {label} {alignEnd}>
  <div class={blockClass}>
    <input
      {id}
      class={cb.elem`native-control`}
      type="radio"
      {names}
      {selected}
      {disabled}
      on:click={onClick} />
    <div class={cb.elem`background`}>
      <div class={cb.elem`outer-circle`} />
      <div class={cb.elem`inner-circle`} />
    </div>
    <div class={cb.elem`ripple`} />
  </div>
</Formfield>
