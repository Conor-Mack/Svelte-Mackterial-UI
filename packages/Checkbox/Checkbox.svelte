<script>
  import { onMount, onDestroy, getContext } from "svelte";
  import Formfield from "../Common/Formfield.svelte";
  import { fieldStore } from "../Common/FormfieldStore.js";
  import ClassBuilder from "../ClassBuilder.js";
  import { MDCCheckbox } from "@material/checkbox";

  let store;
  const unsubscribe = fieldStore.subscribe(s => (store = s));
  $: console.log("CHECK STORE", store);

  export let id = "";
  export let label = "";
  export let disabled = false;

  let fieldElement = null;
  let checkbox = null;

  onMount(() => {
    if (!!checkbox) fieldElement = new MDCCheckbox(checkbox);
    let fieldStore = getContext("BBMD:field-element");
    fieldStore.setInput(fieldElement);
  });

  onDestroy(unsubscribe);

  const cb = new ClassBuilder("checkbox");
  let modifiers = { disabled };
  let props = { modifiers };

  const blockClass = cb.build({ props });
</script>

<Formfield let:fieldElement {label} {id}>
  <div bind:this={checkbox} class={blockClass}>
    <input type="checkbox" class={cb.elem`native-control`} {id} {disabled} />
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
