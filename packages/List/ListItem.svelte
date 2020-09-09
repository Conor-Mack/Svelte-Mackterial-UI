<script>
  import { onMount, getContext } from "svelte";
  import { Radiobutton } from "../Radiobutton";
  import { Checkbox } from "../Checkbox";
  import ClassBuilder from "../ClassBuilder.js";

  const cb = new ClassBuilder("list-item");

  //TODO: Handle events with svelte
  export let onClick = (item) => {};

  //TODO: Use flat prop structure instead of item object
  export let item = null;
  export let doubleLine = false;
  export let actionElement = null; //radiobutton or checkbox

  let role = "option";

  onMount(() => {
    let context = getContext("BBMD:list:context");
    if (context === "menu") {
      role = "menuitem";
    }
  });

  $: if (!!actionElement) {
    setContext("BBMD:input:context", "list-item");
  }

  $: modifiers = {
    selected: !actionElement ? item.selected : null,
    disabled: item.disabled,
  };
  $: props = { modifiers };
  $: listItemClass = cb.build({ props });

  $: useSecondaryText =
    typeof item.text === "object" && "secondary" in item.text;
</script>

<li
  class={listItemClass}
  role="option"
  aria-selected={item.selected}
  tabindex="0"
  on:click={onClick}>
  {#if item.leadingIcon}
    <span class="mdc-list-item__graphic material-icons" aria-hidden="true">
      {item.leadingIcon}
    </span>
  {/if}
  <span class={cb.elem`text`}>
    {#if doubleLine}
      <span class={cb.elem`primary-text`}>{item.text.primary}</span>
      {#if useSecondaryText}
        <span class={cb.elem`secondary-text`}>{item.text.secondary}</span>
      {/if}
    {:else}{item.text}{/if}
  </span>

  {#if actionElement}
    {#if actionElement === 'radiobutton'}
      <Radiobutton checked={item.selected} disabled={item.disabled} />
    {:else if actionElement === 'checkbox'}
      <Checkbox checked={item.selected} disabled={item.disabled} />
    {/if}
  {:else if item.trailingIcon}
    <!-- TODO: Adapt label to accept class prop to handle this. Context is insufficient -->
    <span class="mdc-list-item__meta material-icons" aria-hidden="true">
      {item.trailingIcon}
    </span>
  {/if}
</li>
