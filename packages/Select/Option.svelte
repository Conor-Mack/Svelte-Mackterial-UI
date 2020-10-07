<script>
  //Select menu uses ListItem under the hood but it feels more idomatic to provide an Option component for Select Items
  import { default as Option } from "../List/ListItem.svelte";

  export let text = "";
  export let secondaryText = "";
  export let selected = false;

  export let disabled = false;
  export let actionElement = null;
  export let leadingIcon = "";
  export let trailingIcon = "";
</script>

<Option
  {text}
  {secondaryText}
  {selected}
  {disabled}
  {actionElement}
  {leadingIcon}
  {trailingIcon} />
