<script>
  import "@material/form-field/mdc-form-field.scss";
  import { fieldStore } from "./FormfieldStore.js";
  import { MDCFormField } from "@material/form-field";
  import { onMount, onDestroy, setContext } from "svelte";

  let store = "";
  const unsubscribe = fieldStore.subscribe(s => (store = s));
  // $: console.log("STORE", store);

  export let id = "";
  export let label = "";

  let formField = null;

  onMount(() => {
    if (!!formField) fieldStore.set(new MDCFormField(formField));
    setContext("BBMD:field-element", fieldStore);
  });

  onDestroy(unsubscribe);
</script>

<div bind:this={formField} class="mdc-form-field">
  <slot />
  <label for={id}>{label}</label>
</div>
